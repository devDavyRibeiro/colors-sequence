import Sequencie from "./components/sequencie.tsx";
import Menu, { type IForm } from "./components/menu.tsx";

import { useState } from "react";
function App() {
  const [form,setForm] = useState<IForm>()
  return (
    <div className="h-screen w-screen font-[Chelsea Market]">
      <main className=" text-center flex flex-col content-center items-center justify-center gap-4 h-full">
        
        {form === undefined ?
        <>
          <Menu setForm={(form => setForm(form))} />
        </>
        :
        <>
          <Sequencie form={form} />
        </>
        }

      </main>
    </div>
  )
}

export default App
