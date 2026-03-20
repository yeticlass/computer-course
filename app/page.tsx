import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return ( 
    <>
    Main Page
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;