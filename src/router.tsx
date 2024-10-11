import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { History } from "./pages/History/History.jsx";

export function Router()
{
    return (
        <Routes>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Routes>
    );
}