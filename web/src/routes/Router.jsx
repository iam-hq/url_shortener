import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import Home from "../pages/home/";
import Setting from "../pages/settings/Setting";
import MainLayout from "../layouts/MainLayout";
import Links from "../pages/links";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import {useStore} from "../store";

export default function Router() {
    const isLoggedIn = Boolean(useStore(state => state.token))

    return (
        <BrowserRouter>
            <Routes>

                <Route element={isLoggedIn ? <MainLayout/> : <Navigate to={'/auth/sign-in'}/>}>
                    <Route index element={ <Home/>}/>
                    <Route path="account" element={<Setting/>}/>
                    <Route path="links" element={<Links/>}/>
                    <Route path="settings" element={<Setting/>}/>
                </Route>

                <Route path={'/auth'} element={<AuthLayout/>}>
                    <Route path="sign-in" element={<Login/>}/>
                    <Route path="sign-up" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
