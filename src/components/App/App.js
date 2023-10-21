import { useState } from 'react'
import Button from '../Button';
import i1 from '../../static/images/First.png'
import i2 from '../../static/images/Second.png'
import './app.css'

export default function App() {
    const [result, setResult]=useState('')

    const handleClick=(e)=>{
        setResult((prev)=>prev.concat(e.target.name))
    }
    const clear=()=>{
        setResult('')
    }
    const backspace=()=>{
        setResult((prev)=>result.slice(0, result.length-1))
    }
    const onEqual=()=>{
        try{
            setResult(eval(result).toString())
        }catch(err){
            setResult('Error')
        }
    }

    const buttonsArr = [
        { text: "C", color: "rgb(37, 178, 37)", id: "clear" },
        { text: "<", color: "rgb(37, 178, 37)", id: "backspace" },
        { text: "/", name:'/', id: "slash", color: "rgb(117, 113, 204)"},
        { text: "X", name:'X', id: "X", color: "rgb(117, 113, 204)"},
        { text: "7", name:'7', id: 7 ,},
        { text: "8", name:'8', id: 8 ,},
        { text: "9", name:'9', id: 9 ,},
        { text: "-", name:'-', id: "minus", color: "rgb(117, 113, 204)"},
        { text: "4", name:'4', id: 4 ,},
        { text: "5", name:'5', id: 5 ,},
        { text: "6", name:'6', id: 6 ,},
        { text: "+", name:'+', id: "plus", color: "rgb(117, 113, 204)"},
        { text: "1", name:'1', id: 1 ,},
        { text: "2", name:'2', id: 2 ,},
        { text: "3", name:'3', id: 3 ,},
        { text: "=", color: "rgb(37, 178, 37)", id: "equal", classname: "equal"},
        { text: "0", name:'0', id: 0, classname: "zero"},
        { text: ".", name:'.', id: "dot"},
    ]

    const data = buttonsArr.map((btn) => {
        return (<Button key={btn.id} btn={btn} handleClick={handleClick} clear={clear} backspace={backspace} onEqual={onEqual} />)
    })

    return (
        <>
            <div className='calculator-grid'>
                <img src={i1} alt='first' className='first' />
                <img src={i2} alt='second' className='second' />
                <label className='output'>
                    <input type='text' className='inp' placeholder='0' value={result}/>
                </label>
                {data}
            </div>
        </>
    )
}


