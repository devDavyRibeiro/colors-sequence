import React from 'react'
export default function Menu() {
  return (
    <div className="w-1/2 h-1/2 p-4 bg-segundary rounded-lg border-blue-400 border-4  flex flex-col items-center justify-around">
        <h2 className="text-3xl h-[20%]">Color Sequence</h2>
        <form className='flex flex-col w-full px-10 text-xl gap-5 content-center'>
          <div className="flex flex-row mx-10 justify-between">
            <label htmlFor="colorCount">Número de Cores:</label>
            <input className="border border-gray-300 rounded-md p-1 text-center w-1/5" type="number" id="colorCount" name="colorCount" min="3" max="10" defaultValue="4" />
          </div>
          <div className="flex flex-row mx-10 justify-between">
            <label htmlFor="revealSequence">Desvendar sequencia</label>
            <div className="text-center w-1/5">
              <label className="switch">
                <input type="checkbox"id="revealSequence" name="revealSequence" required/>
                <span className="slider round"></span>
            </label>
            </div>
          </div>
          <button className=' m-auto px-4 w-min-1/4' type="submit">Iniciar Jogo</button>
        </form> 
    </div>
  ) 
}
