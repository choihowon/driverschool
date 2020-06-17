import * as React from 'react';
import { Redirect } from 'react-router-dom';

const notfound = () => {
const auth = true;
return auth ?
<h1>Admin페이지</h1> :
<Redirect to="/dda" />;
};

export default notfound;
