import type React from "react";
import colorBlue from "../assets/color-blue.png";
import colorGreen from "../assets/color-green.png";
import colorPink from "../assets/color-pink.png";
import colorRed from "../assets/color-red.png";
import colorWhite from "../assets/color-white.png";
import colorYellow from "../assets/color-yellow.png";
import { useMemo, useState } from "react";
import type { IForm } from "./menu";
import Swal from 'sweetalert2';


interface IResponse{
  numColor:number,
  numPosition:number
}

interface IMemorySequence{
  sequence:string[],
  response:IResponse
}


function Sequencie(props: {
  form: IForm
}) {
  
  const [lances,setLances] = useState(0);
  
  const tintasInGame = ['red', 'green', 'blue', 'yellow', 'white', 'pink']
  

  const sequenceInitial = useMemo(()=>{    
    const sequence: string[] = []
  
    while (sequence.length !== props.form.colorCount) {
      // eslint-disable-next-line react-hooks/purity
      const randomNumber = Math.floor(Math.random() * tintasInGame.length)
      const tinta = tintasInGame[randomNumber]
  
      if (sequence.includes(tinta)) continue
  
      sequence.push(tinta)
  
    }
    return sequence

  },[props.form.colorCount]) 


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
    
    if(e.currentTarget.hasChildNodes()){
      return;
    }
    if(element){
      e.currentTarget.appendChild(element);
    }
  }


  const verificationSequence =   (sequenceNow:string[]):IResponse=>{
    let numPosition : number = 0; 
    let numColor: number = 0;
    const sequenceTempo = ['red', 'green', 'blue', 'yellow']
    for (let i = 0; i < sequenceNow.length; i++) {
      const positionTintaSequence = sequenceTempo!.indexOf(sequenceNow[i]);
      if(positionTintaSequence < 0) continue;

      numColor++;

      if(positionTintaSequence === i) numPosition++
      
    }
    return {
      numColor,
      numPosition
    }
  }


 const makeSequence = (colorCount: number, colors: string[])=>{
    const sequence: string[] = []

    while (sequence.length !== colorCount) {
      const randomNumber = Math.floor(Math.random() * colors.length)
      const tinta = colors[randomNumber]
  
      if (sequence.includes(tinta)) continue
  
      sequence.push(tinta)
  
    }
    return sequence
  }
  
  const UnravelSequence = ()=>{
    let response:IResponse={
      numColor:0,
      numPosition:0
    }
    let lances = 0;
    const memorySequence:IMemorySequence[]=[]

    while(response.numColor !== props.form.colorCount || response.numPosition !== props.form.colorCount){  
      const sequence = makeSequence(props.form.colorCount, tintasInGame);
      response = verificationSequence(sequence)
      memorySequence.push({response,sequence})
      console.log(memorySequence)
      lances++;

      if(response.numColor < memorySequence[lances-1].response.numColor){
        console.log('menor')
      }
      else if(response.numColor > memorySequence[lances-1].response.numColor){
        console.log('menor')
      }
      else{
        console.log('igual')
      }
    } 
      
    Swal.fire({
        title: "Uau!",
        text: "O PC acertou a sequência depois de " + lances + " tentativas!",
        icon:"success",
      })
  }

  const submitSequence = ()=>{

    if(props.form.revealSequence){
      UnravelSequence();
    }
    else{
      const DocumentsItemSequencie:NodeListOf<HTMLImageElement> = document.querySelectorAll(".sequencie-container > .item img")
      
      if(DocumentsItemSequencie.length < props.form.colorCount){
        Swal.fire({
          title:"Ops...",
          text:`É preciso ter ${props.form.colorCount} tintas colocadas`,
          icon:'error'
        })
        return
      }
  
    const sequenceNow: string[] = [];

    DocumentsItemSequencie.forEach(d=>{
      sequenceNow.push(d.id)
    })
    
    const response = verificationSequence(sequenceNow);
    if(response.numColor === props.form.colorCount && response.numPosition === props.form.colorCount){
      Swal.fire({
        title: "Parabéns",
        text: "Você acertou a sequência com " + lances + " tentativas!",
        icon:"success",
      })
    } 
    else{
      Swal.fire(`Número de cores certas: ${response.numColor}  
        \nNúmero de posições certas: ${response.numPosition}`)      
    }
    setLances(lances + 1);
  }
  


  }


  return (
    <div className="flex flex-col w-[75%] p-10 bg-segundary rounded-3xl gap-5 mx-auto">
      <header>
        <h2>Color Sequence</h2>
      </header>
      <div className="flex justify-between items-center">
        <p className="w-1/2 text-start text-2xl font-bold text-white text-shadow-sm/20 text-shadow-black ">Tentativas: {lances}</p>
        <div className="reservation flex h-18 justify-end w-1/2 gap-2 items-center">
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
      </div>
      <div className="sequencie-container flex h-45 w-full justify-between gap-5 items-center">

        {
          sequenceInitial!.map((_, i:number)=> {
            return (
            <div key={i} className="item" onDragOver={dragOverHandler} onDrop={dropHandler}></div>
            )
          })
        }
            
      </div>
      <button onClick={submitSequence} className="text-center w-2/6 m-auto h-10 text-2xl font-bold">Testar</button>
    </div>
  );
}

export default Sequencie;
