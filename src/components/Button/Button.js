import './button.css'

export default function Button (props){
    const {text, color, classname, name, id}=props.btn
    const {handleClick, clear, backspace, onEqual}=props

    const EventChecker=(e)=>{
        if(name){
            handleClick(e)
        }else if(id==='clear'){
            clear()
        }else if(id==='backspace'){
            backspace()
        }else if(id==='equal'){
            onEqual()
        }
    }

    return(
        <button className={classname? classname: "btn"} style={color ? {color}:null} onClick={EventChecker} name={name}>
            <span>
                {text}
            </span>
        </button>
    )
}

