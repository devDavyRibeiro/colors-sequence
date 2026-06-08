import Sequencie from "./components/sequencie.tsx";
import Menu from "./components/menu.tsx";
function App() {
  return (
    <>
      <header className="header">
        <h1>Color Sequence</h1>
      </header>

      <main>
        <Menu />
        <Sequencie />
      </main>

      <footer>
        <p>&#169;2026 Davy Ribeiro</p>
        <a href="#">Dev Davy Ribeiro</a>
      </footer>
    </>
  )
}

export default App
