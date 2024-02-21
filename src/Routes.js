import { BrowserRouter, Route,Routes} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Home"; 
import Calender from "./calender";
import Rating from "./Rating";
export default function Routeit(){
    return(
     <>
        <Routes>
            <Route path="/"element={<Login/>}/>
            <Route path="/home"element={<Login/>}/>
            <Route path="/calender"element={<Calender/>}/>
            <Route path="/Rating"element={<Rating/>}/>
            
        </Routes>
        </>
    )
    
}