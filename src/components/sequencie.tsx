import colorBlue from "../assets/color-blue.png";
import colorGreen from "../assets/color-green.png";
import colorPink from "../assets/color-pink.png";
import colorRed from "../assets/color-red.png";
import colorWhite from "../assets/color-white.png";
import colorYellow from "../assets/color-yellow.png";

function Sequencie() {
  return (
    <div className="flex flex-col w-[75%] p-10 bg-segundary rounded-3xl gap-5">
      <header>
        <h2 className="">Color Sequence</h2>
      </header>
      <div className="reservation flex justify-between ml-[50%] gap-2 items-center">
        <div className="item">
          <img src={colorRed} alt="Red" id="red" draggable={true} />
        </div>
        <div className="item">
          <img src={colorGreen} alt="Green" id="green" draggable={true} />
        </div>
        <div className="item">
          <img src={colorBlue} alt="Blue" id="blue" draggable={true} />
        </div>
        <div className="item">
          <img src={colorYellow} alt="Yellow" id="yellow" draggable={true} />
        </div>
        <div className="item">
          <img src={colorWhite} alt="White" id="white" draggable={true} />
        </div>
        <div className="item">
          <img src={colorPink} alt="Pink" id="pink" draggable={true} />
        </div>
      </div>
      <div className="sequencie-container flex justify-between gap-5 items-center">
        <div className="item">
          
        </div>
        <div className="item">
         
        </div>
        <div className="item">
          
        </div>
        <div className="item">
          
        </div>    
      </div>
      <button className="text-center w-2/6 m-auto h-10 text-2xl font-bold">Testar</button>
    </div>
  );
}

export default Sequencie;
