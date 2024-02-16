import { useState } from 'react'
import ImgFCoin from './Images/abraham-linkcoln-gold-coin.png'
import ImgBCoin from './Images/dollar-coin.png'
let ui;
function NewCoin() {

    let [count, setCount] = useState(0)

let [face,setFace]=useState(0)
let [tail,setTail]=useState(0)
let coin=[ImgBCoin,ImgFCoin]
let math=Math.floor(Math.random()*coin.length)
function click()
{
  console.log(math);
    setCount(count+1)
    if(math==0){
        setTail(tail+1)
    }else {
      setFace(face +1)
    }
}

  return (
    <div>
        <button onClick={click}>click</button>
        <img src={coin[math]} className='w-25' alt="" />
        <h2>{face} Face</h2>
        <h2>{tail} Tail</h2>
    </div>
  )
}

export default NewCoin