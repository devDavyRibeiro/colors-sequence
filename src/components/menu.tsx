import React from 'react'
export default function Menu() {
  return (
    <div className="w-1/3 p-4 rounded-lg shadow-md display-flex flex-col items-center justify-center gap-4">
        <h2>Color Sequence</h2>
        <hr/>
        <form>
          <div className="flex flex-row items-center justify-between gap-10">
            <label htmlFor="colorCount">Número de Cores:</label>
            <input className="border border-gray-300 rounded-md p-1 text-center focus:outline-none focus:ring-2 focus:ring-black-500" type="number" id="colorCount" name="colorCount" min="3" max="10" defaultValue="4" />
          </div>
          <div className="flex flex-row items-center justify-between gap-10">
            <label htmlFor="revealSequence">Desvendar sequencia</label>
            <input type="checkbox" id="revealSequence" name="revealSequence"/>
          </div>
          <button type="submit">Iniciar Jogo</button>
        </form>
    </div>
  )
}
