const express = require("express");
const router = express.Router();
const Board = require("../../schemas/board");

// 게시글 삭제
// /board/delete 로 post왔을 시 실행
router.post("/delete", async (req, res) => {
    try {
      await Board.remove({
        _id: req.body._id
      });
      res.json({ message: true });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  //수정
  router.post("/update", async (req, res) => {
    try {
      await Board.update(
        { _id: req.body._id },
        {
          $set: {
            title: req.body.title,
            content: req.body.content
          }
        }
      );
      res.json({ message: "게시글이 수정 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  //추가
  router.post("/write", async (req, res) => {
    try {
      let obj;
  
      obj = {
        title: req.body.title,
        content: req.body.content
      };
  
      const board = new Board(obj);
      await board.save();
      res.json({ message: "게시글이 업로드 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  router.post("/getBoardList", async (req, res) => {
    try {
      const _id = req.body._id;
      const board = await Board.find({ writer: _id }, null, {
        sort: { createdAt: -1 }
      });
      res.json({ list: board });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  //상세페이지보여주기
  router.post("/detail", async (req, res) => {
    try {
      const _id = req.body._id;
      const board = await Board.find({ _id });
      res.json({ board });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

module.exports = router;