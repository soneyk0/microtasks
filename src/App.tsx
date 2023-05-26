import React, {useState} from 'react';
import './App.css';

// import {Button} from "./components/Button";


function App() {
    let [a, setA] = useState(1)



    const onClickHandler = () => {
        setA(++a);
        console.log(a)

    }
    const onClickHandler0 = () => {
        setA(0);
        console.log(0)

    }



    // const Button1Foo = (subscriber: string, age: number, adres: string) => {
    //     console.log(subscriber, age, adres)
    // }
    // const Button2Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button3Foo = () => {
    //     console.log('i stuped button')


    return (
        <div className={'App'}>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>
        </div>

        // <div className={'App'}>
        //     <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('im Yana', 21, 'live in Minsk')}/>
        //     <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('im Vasya', 18)}/>
        //     <Button name={'Stuped'} callBack={Button3Foo}/>
        // </div>

    );
}


export default App;
