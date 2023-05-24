import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'SECOND BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </>
    );
}

export default App;
