import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main component
// import Counter from './counter';
// import Todilist from './Todilist';
// import Example from './Example';
// import Shpassword from './Shpassword';
// import Apifetch from "./Apifetch";
// import Card from './card';
// import Cards from './cards';
// import Basic from "./Basic";
// import Form from './form';
import Practical from './practical';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Counter/> */}
    <Practical/>

    {/* <Example/> */}
    {/* <Form/> */}
     {/* <App /> */}
    {/* <Todilist/> */}
    {/* <Shpassword/>
    <Apifetch/>
    <Card/>
    <Cards/>   */}
    {/* <Basic/> */}
  </React.StrictMode>
);
