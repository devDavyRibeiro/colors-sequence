import type React from "react";
import colorBlue from "../assets/color-blue.png";
import colorGreen from "../assets/color-green.png";
import colorPink from "../assets/color-pink.png";
import colorRed from "../assets/color-red.png";
import colorWhite from "../assets/color-white.png";
import colorYellow from "../assets/color-yellow.png";
import { useState } from "react";

function Sequencie() {

  const SEQUENCE_INITIAL : string[] = ["red","green","blue","yellow"];
  
  const [lances,setLances] = useState(0);
  

  const dragStartHandler = (e:React.DragEvent<HTMLImageElement>)=>{
    e.dataTransfer.setData("text",e.currentTarget.id)
  }

  const dragOverHandler = (e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault();
  }

  const dropHandler = (e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const element = document.getElementById(data);
    if(element){
      e.currentTarget.appendChild(element);
    }
  }

  const submitSequence = ()=>{
    let numPosition : number = 0; 
    let numColor: number = 0;
    const sequenceNow: string[] = [];
    const documents:NodeListOf<HTMLImageElement> = document.querySelectorAll(".sequencie-container > .item img")
    
    if(documents.length !== 4){
      alert("É preciso ter 4 tintas colocadas")
      return
    }

    setLances(lances + 1);
    
    documents.forEach(d=>{
      sequenceNow.push(d.id)
    })

    for (let i = 0; i < sequenceNow.length; i++) {
      
      const positionTintaSequence = SEQUENCE_INITIAL.indexOf(sequenceNow[i]);
      if(positionTintaSequence < 0) continue;
      numColor++;

      if(positionTintaSequence === i) numPosition++ 
    }

    alert("Número de cores certas: " + numColor + 
      "\nNúmero de posições certas: " + numPosition)

  }


  return (
    <div className="flex flex-col w-[75%] p-10 bg-segundary rounded-3xl gap-5">
      <header>
        <h2 className=" ">Color Sequence</h2>
      </header>
      <div className="reservation flex h-18 justify-end ml-[50%] gap-2 items-center">
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          <img src={colorRed} alt="Red" id="red" draggable={true} onDragStart={dragStartHandler}/>
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>    
          <img src={colorGreen} alt="Green" id="green" draggable={true} onDragStart={dragStartHandler} />
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          <img src={colorBlue} alt="Blue" id="blue" draggable={true} onDragStart={dragStartHandler} />
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          <img src={colorYellow} alt="Yellow" id="yellow" draggable={true} onDragStart={dragStartHandler} />
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          <img src={colorWhite} alt="White" id="white" draggable={true} onDragStart={dragStartHandler} />
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          <img src={colorPink} alt="Pink" id="pink" draggable={true} onDragStart={dragStartHandler} />
        </div>
      </div>
      <div className="sequencie-container flex h-45 w-full justify-end gap-5 items-center">
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
         
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          
        </div>
        <div className="item" onDragOver={dragOverHandler} onDrop={dropHandler}>
          
        </div>    
      </div>
      <button onClick={submitSequence} className="text-center w-2/6 m-auto h-10 text-2xl font-bold">Testar</button>
    </div>
  );
}

export default Sequencie;
