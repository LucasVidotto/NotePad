import  React,{useState} from 'react';
import "../styles/CardNotesStyle.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";

export function CardNotes(){
    const backgroundColors = ["green", "blue", "red", "black"];
    const [flag, setFlag] = useState(true);
    const [flagHover, setFlagHover] = useState(false);
    const [flagTwo, setFlagTwo] = useState(true);
    const [flagDelete, setFlagDelete] = useState(false);
    const [flagText, setFlagText] = useState('');
    const [noteText, setNoteText] = useState(`Algum tipo de conteudo aqui,Algum tipo de conteudo aqui,Algum tipo de conteudo aqui,
    Algum tipo de conteudo aqui,Algum tipo de conteudo aqui,Algum tipo de conteudo aqui`);
    const [changeColor, setChangeColor] = useState(0);

    const handlerChangeColor = () =>{
        setChangeColor((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    }
    const handlerChangeText = () =>{
        setFlagText(noteText)
        handlerFalgTow();
    }

    const handlerDelete = () =>{
        setFlagDelete(!flagDelete);
    }

    const handlerFalg = () =>{
        setFlag(!flag);
    };

    const handlerFalgHover = () =>{
        setFlagHover(!flagHover);
    };

    const handlerFalgTow = () =>{
        setFlagTwo(!flagTwo);
    };

    return(
        <>
            <div className="bar-card" style={{ backgroundColor: backgroundColors[changeColor] }}> 
                <IoIosColorPalette color="white" size="23px" style={{ marginRight: "55%", cursor: "Pointer"}} onClick={handlerFalgHover}/>
                <button type="button" className="down" onClick={handlerFalg}> <span className="down-text"> - </span> </button>
                <SlNote color="white" size="16px" style={{ marginRight: "25px", cursor: "Pointer"}} onClick={handlerFalgTow}/>
                <GiNotebook color="#fff" size="18px" style={{marginRight: "25px", cursor:"pointer"}} onClick={handlerChangeText}/>
                <FaRegTrashAlt color="red" size="18px" style={{ marginRight: "15px" }} onClick={handlerDelete}/>
            </div>
            {flagDelete && <div className="card-info"> Deseja Deletar? </div>}
            {flag && 
            <main className="container-card" /* onMouseEnter={handlerFalgHover} onMouseOut={handlerFalgHover} */>
                 {flagHover && 
                    <div className='card-hover' style={{ backgroundColor: backgroundColors[changeColor] }}>
                        <IoIosColorPalette color="white" size="35px" style={{margin:'auto', cursor: "Pointer"}} onClick={handlerChangeColor}/>
                    </div>}
                
                <span>{noteText}</span>
                {flagTwo && 
                    <textarea 
                        value={flagText} 
                        id="w3review" 
                        name="w3review" 
                        rows={4} 
                        cols={100} 
                        style={{height: "60px", width: "98%"}} 
                        onChange={(e) => {setNoteText(e.target.value);setFlagText(e.target.value)}}>
                    </textarea>}
            </main>}
        </>
    )
}