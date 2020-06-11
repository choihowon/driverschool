/*global kakao*/
import React , { Component } from "react";
import './index2.css';

class MapContent extends Component {
	componentDidMount= () => {
    var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.552258, 126.993913), //지도의 중심좌표.
        level: 9 //지도의 레벨(확대, 축소 정도)
		};
		this.map = new kakao.maps.Map(container, options);
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: new kakao.maps.LatLng(37.658864, 127.058126)
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.507871,127.067447)
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.550586,126.821337) 
		});
		marker.setMap(this.map);
		marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(37.581227, 126.881529)
		});
			marker.setMap(this.map); //지도 생성 및 객체 리턴
  }

dobong = () => {
  var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.657845, 127.057987), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도
 	};
  this.map = new kakao.maps.Map(container, options);
  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.657845, 127.057987); 
    
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 노원구 동일로 1449 도봉운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 documentelement가 가능합니다
   iwPosition = new kakao.maps.LatLng(37.657845, 127.057987), //인포윈도우 표시 위치입니다
   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}  
gangnam = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.507871,127.067447), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
	 };
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.507871,127.067447); 
 
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 강남구 테헤란로114길 23 강남운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
	 iwPosition = new kakao.maps.LatLng(37.507871,127.067447), //인포윈도우 표시 위치입니다
	 iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
gangseo = () => {
  var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.550586,126.821337), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도
 	};
  this.map = new kakao.maps.Map(container, options);
  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.550586,126.821337); 
    
  //마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울 강서구 남부순환로 171 강서운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 documentelement가 가능합니다
   iwPosition = new kakao.maps.LatLng(37.550586, 126.821337), //인포윈도우 표시 위치입니다
   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
	}
seobu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.578880, 126.881712), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
	 };
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.578880, 126.881712); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">서울특별시 마포구 상암동 451-6 서부운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
	 iwPosition = new kakao.maps.LatLng(37.578880, 126.881712), //인포윈도우 표시 위치입니다
	 iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
	}	
busannambu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.128431, 129.105876), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.128431, 129.105876); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">부산광역시 남구 용호동 용호로 16 부산남부 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.128431, 129.105876), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
	}
busanbokbu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.177096, 128.983123), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.177096, 128.983123); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">부산광역시 사상구 덕포동 사상로367번길 35 부산북부 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.177096, 128.983123), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
yongin = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.289438, 127.108603), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.289438, 127.108603); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경기도 용인시 기흥구 신갈동 용구대로 2267 용인 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.289438, 127.108603), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
ansan = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.345020, 126.829044), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.345020, 126.829044); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경기도 안산시 단원구 와동 순환로 352 안산 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.345020, 126.829044), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
uijeongbu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.759552, 127.076622), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.759552, 127.076622); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경기도 의정부시 금오동 금오로109번길 55 의정부 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.759552, 127.076622), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
chuncheon = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.947211, 127.750622), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.947211, 127.750622); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">강원도 춘천시 신북읍 신북로 247 춘천 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.947211, 127.750622), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
gangneung = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.795237, 128.817648), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.795237, 128.817648); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">강원도 강릉시 사천면 중앙서로 464 강릉 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.795237, 128.817648), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
wonju = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.338861, 127.898654), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.338861, 127.898654); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">강원도 원주시 호저면 사제로 596 원주 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.338861, 127.898654), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
taebaek = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.181371, 128.970372), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.181371, 128.970372); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">강원도 태백시 화전동 48 태백 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.181371, 128.970372), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
jeollabokdo = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.862480, 127.070007), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.862480, 127.070007); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">전라북도 전주시 덕진구 여의동 팔복로 359 전라북도 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.862480, 127.070007), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
jeollanamdo = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.008836, 126.705848), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.008836, 126.705848); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">전라남도 나주시 삼영동 시 내영산2길 49 전라남도 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.008836, 126.705848), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
gwangyang = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(34.961391, 127.571927), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(34.961391, 127.571927); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">전라남도 광양시 광양읍 덕례리 549-1 광양 운전면허시험장</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(34.961391, 127.571927), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
chungjoo = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(36.577454, 127.567168), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(36.577454, 127.567168); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">충청북도 청주시 상당구 가덕면 교육원로 131-20</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(36.577454, 127.567168), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
choongjoo = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(36.577454, 127.567168), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(36.577454, 127.567168); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">충청북도 청주시 상당구 가덕면 교육원로 131-20</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(36.577454, 127.567168), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
yesan = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(36.672767, 126.788040), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(36.672767, 126.788040); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">충청남도 예산군 오가면 국사봉로 500</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(36.672767, 126.788040), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
moonkyung = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(36.636965, 128.173571), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(36.636965, 128.173571); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경상북도 문경시 점촌4동 신기공단1길 12</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(36.636965, 128.173571), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
pohang = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.942994, 129.393691), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.942994, 129.393691); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경상북도 포항시 남구 오천읍 문덕2리 1030-6</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.942994, 129.393691), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
masan = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.124560, 128.487561), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.124560, 128.487561); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">경상남도 창원시 마산회원구 진동면 진북산업로 90-1</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.124560, 128.487561), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
jeju = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(33.405993, 126.387623), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(33.405993, 126.387623); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">제주특별자치도 제주시 애월읍 평화로 2072</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(33.405993, 126.387623), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
incheon = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.384188, 126.708755), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(37.384188, 126.708755); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">인천광역시 남동구 논현고잔동 아암대로 1247</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(37.384188, 126.708755), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
daegu = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.924575, 128.551888), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.924575, 128.551888); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">대구광역시 북구 태전동 1076-1</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.924575, 128.551888), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
daejeon = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(36.285589, 127.461612), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(36.285589, 127.461612); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">대전광역시 동구 대별동 산서로1660번길 90</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(36.285589, 127.461612), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
ulsan = () => {
	var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(35.576599, 129.099100), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도
		};
	this.map = new kakao.maps.Map(container, options);
	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(35.576599, 129.099100); 
		
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
		marker.setMap(this.map);
	var iwContent = '<div style="padding:5px;">울산광역시 울주군 상북면 봉화로 342</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나documentelement가 가능합니다
		iwPosition = new kakao.maps.LatLng(35.576599, 129.099100), //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
	var infowindow = new kakao.maps.InfoWindow({
		map: this.map, // 인포윈도우가 표시될 지도
		position : iwPosition, 
		content : iwContent,
		removable : iwRemoveable
	});
}
				
    render() {
        return (
					<div class="map">
					<div class="test_site">
							<div class="test_place"><h1>전국 시험장 안내</h1></div>
							<div class="country">
									<form><table>
											<tr><td>서울</td><td>
											<input class="button" onClick={this.gangnam} type="button" value="강남"/>
											<input class="button" onClick={this.gangseo} type="button" value="강서"/>
											<input class="button" onClick={this.dobong} type="button" value="도봉"/>
											<input class="button" onClick={this.seobu} type="button" value="서부"/>
											</td><td>인천</td><td>
											<input class="button" onClick={this.incheon} type="button" value="인천"/>
											</td></tr>
											<tr><td>부산</td><td>
											<input class="button" onClick={this.busannambu} id="button" type="button" value="부산남부"/>
											<input class="button" onClick={this.busanbokbu} id="button" type="button" value="부산북부"/>
											</td><td>대구</td><td>
												<input class="button" onClick={this.daegu} type="button" value="대구"/>
											</td></tr>
											<tr><td>경기</td><td>
											<input class="button" onClick={this.yongin} type="button" value="용인"/>
											<input class="button" onClick={this.ansan} type="button" value="안산"/>
											<input class="button" onClick={this.uijeongbu} type="button" value="의정부"/>
											</td><td>대전</td><td>
											<input class="button" onClick={this.daejeon} type="button" value="대전"/>
											</td></tr>
											<tr><td>강원</td><td>
											<input class="button" onClick={this.chuncheon} type="button" value="춘천"/>
											<input class="button" onClick={this.gangneung} type="button" value="강릉"/>
											<input class="button" onClick={this.wonju} type="button" value="원주"/>
											<input class="button" onClick={this.taebaek} type="button" value="태백"/>
											</td><td>울산</td><td>
											<input class="button" onClick={this.ulsan} type="button" value="울산"/>
											</td></tr>
											<tr><td>전라</td><td>
											<input class="button" onClick={this.jeollabokdo} type="button" value="전북"/>
											<input class="button" onClick={this.jeollanamdo} type="button" value="전남"/>
											<input class="button" onClick={this.gwangyang} type="button" value="광양"/>
											</td><td>제주</td><td>
											<input class="button" onClick={this.jeju} type="button" value="제주"/>
											</td></tr>
											<tr><td>충청</td><td>
											<input class="button" onClick={this.chungjoo} type="button" value="청주"/>
											<input class="button" onClick={this.choongjoo} type="button" value="충주"/>
											<input class="button" onClick={this.yesan} type="button" value="예산"/>
											</td></tr>
											<tr><td>경상</td><td>
											<input class="button" onClick={this.moonkyung} type="button" value="문경"/>
											<input class="button" onClick={this.pohang} type="button" value="포항"/>
											<input class="button" onClick={this.masan} type="button" value="마산"/>
											</td></tr>
									</table></form>
							</div>
					</div>
						<div id="myMap"/>
					</div>
        )
    }
}
export default MapContent;
