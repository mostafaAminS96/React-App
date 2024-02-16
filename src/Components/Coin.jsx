import { useState } from 'react'
import ImgFCoin from './Images/abraham-linkcoln-gold-coin.png'
import ImgBCoin from './Images/dollar-coin.png'
import './Coin.css'

function Coin() {

let [flag, setFlag] = useState(true);
let [count, setCount] = useState(0)
let [countFace, setCountF] = useState(0)
let [countTail, setCountT] = useState(0)


const switchCoin = () => {
    setCount(count +1)
    const num = Math.floor(Math.random() * (2));
        if (num == 1) {
            setFlag(true);
            setCountF(countFace + 1);
        }else{
            setFlag(false);
            setCountT(countTail + 1);
        }
    console.log(num);
};


let [section, setSection] = useState(false);

const according = ()=>{
    setSection(!section);
}

let p;
if (section == true) {
    p = <li style={{backgroundColor: 'aqua', width: 200}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto, quas tenetur similique voluptates nisi.
        </li>
}


    return (
        <>
        <div>
            <h2>Flip Coin</h2>
            <button onClick={()=> switchCoin()}>Click</button>
            {flag ? <img src={ImgFCoin} style={{width: 200, }} alt="" /> : <img src={ImgBCoin} style={{width: 200}} alt="" />}
            <h4>Out of {count} flips, there have been {countFace} heads, and {countTail} tails</h4>
        </div>
        <div style={{height: 200}}>
            <ul onClick={according} className='btn' style={{backgroundColor: 'aqua', width: 200}}>Open Close According
            </ul>
            {section ? p : null }
        </div>
        </>
    )
}

export default Coin