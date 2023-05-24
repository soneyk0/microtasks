import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>)=>{
    //     console.log("Hello Im Vasy")
    //
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>)=>{
    //     console.log("Hello Im Yana")
    // }
    const onClickHandler = (name: string) => {
        console.log(name)
    }




    return (
        // <>
        //     <Header title={'NEW BODY'}/>
        //     <Body titleForBody={'SECOND BODY'}/>
        //     <Footer titleForFooter={'NEW FOOTER'}/>
        // </>
        <div className='App'>
            {/*<button onClick={(event)=>{console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASY')}>MyYouTubeChanel-1
            </button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('YANA')}>MyYouTubeChanel-2
            </button>
        </div>
    );
}



export default App;
