import React from 'react'
export default function Menu() {
  return (
    <div>
        <h2>Color Sequence</h2>
        <hr/>
        <form >
          <label htmlFor="colorCount">Número de Cores:</label>
          <input type="number" id="colorCount" name="colorCount" min="3" max="10" defaultValue="4" />
          <label htmlFor="revealSequence">Desvendar sequencia</label>
          <input type="checkbox" id="revealSequence" name="revealSequence"/>
          <button type="submit">Iniciar Jogo</button>
        </form>
    </div>
  )
}
