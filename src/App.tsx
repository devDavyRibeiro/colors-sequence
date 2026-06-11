import Sequencie from "./components/sequencie.tsx";
import Menu from "./components/menu.tsx";
function App() {
  return (
    <div className="h-screen w-screen font-[Poppins]">
      <main className=" text-center flex flex-col content-center items-center justify-center gap-4 h-full">
        <Menu />
        {/* <Sequencie /> */}
      </main>
    </div>
  )
}

export default App
