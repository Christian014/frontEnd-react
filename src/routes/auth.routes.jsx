import { Routes, Route } from "react-router-dom";

import { SigUp } from "../pages/sigUp/index";
import { SigIn } from "../pages/sigIn/index";

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<SigIn />} />
            <Route path="/register" element = {<SigUp />} />
        </Routes>
    )
}