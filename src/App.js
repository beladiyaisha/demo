
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./pages/Addstudent";
import StudentList from "./pages/StudentList";


function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="*" element={<h1>Page Not Found.....</h1>} />
            
        </Routes>
        </BrowserRouter>
        </>
    )
}



export default App;