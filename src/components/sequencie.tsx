
import colorBlue from "../assets/color-blue.png";
import colorGreen from "../assets/color-green.png";
import colorPink from "../assets/color-pink.png";
import colorRed from "../assets/color-red.png";
import colorWhite from "../assets/color-white.png";
import colorYellow from "../assets/color-yellow.png";


function Sequencie() {
  return (
    <>
      <div className="sequencie-component ">
      <header>
        <h2>Color Sequence</h2>
      </header>
        <div className="reservation">
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
        <div className="sequencie-container">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <button>Testar</button>
      </div>
    </>
  )
}

export default Sequencie
