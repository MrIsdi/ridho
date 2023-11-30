import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fery from "./pages/Fery"

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/invite/:name" element={ <Fery /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}