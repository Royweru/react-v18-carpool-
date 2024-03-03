import { Route,Routes } from "react-router-dom"
import Layout from "./layout"
import { Root } from "./_root/root"
import { InternationalStock } from "./_browse/international/international"
import { LocalStock } from "./_browse/local/local"



function App() {
  
  return (
    <>
    <Routes>
          <Route element={<Layout />}>
                 <Route index element={<Root />}/>
                 <Route path="/browse/international" element={<InternationalStock/>}/>
                 <Route path="/browse/local" element={<LocalStock/>}/>
          </Route>
    </Routes>
    </>
  )
}

export default App
