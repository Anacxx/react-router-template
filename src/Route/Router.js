import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
export const Router = () => {
    return(
        <BrowserRouter >
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>
        </Routes>
        </BrowserRouter>
    )
}