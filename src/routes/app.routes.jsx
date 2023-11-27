import { Routes, Route } from "react-router-dom";

import { New } from "../pages/new/index";
import { Home } from "../pages/home/index";
import { Details } from "../pages/Details/index";
import { Profile } from "../pages/profile/index";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/new" element = {<New />} />
            <Route path="/details/:id" element = {<Details />} />
            <Route path="/profile" element = {<Profile />} />
        </Routes>
    )
}