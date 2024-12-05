import {Outlet, useNavigate} from "react-router";
import Drawer from "../components/Drawer";
import { FaHouse, FaUserLarge, FaList, FaListCheck, FaUsers, FaUserTie, FaGear, FaMagnifyingGlass, FaBars, FaArrowRightFromBracket  } from "react-icons/fa6";
import {useEffect} from "react";
import {useStore} from "../store";

export default function MainLayout() {
    const navigate = useNavigate();
    const {token, setLogout} = useStore();

    const logout = () => {
        setLogout();
        navigate("/auth/sign-in");
    }

    useEffect(() => {
        if(!token) navigate("/auth/sign-in");
    }, []);
  return (
    <div className={'bg-gray-100 min-h-screen relative'}>
        <header className={'top-0'}>
            <div className="py-3 px-6 flex items-center w-full text-white bg-gradient-to-r from-indigo-600 to-indigo-500 mb-6 lg:mb-12">
                <Drawer>
                    <Drawer.Trigger><div className={"me-2 md:me-6 p-2 rounded-lg hover:bg-indigo-500 transition-all"}><FaBars className={"text-2xl"}/></div></Drawer.Trigger>

                    <Drawer.Content title='Navigation'>
                        <Drawer.Links>
                            <Drawer.Link icon={<FaHouse/>} text={'Index'} to={'/'}/>
                            <Drawer.Link icon={<FaUserLarge/>} text={'Account'} to={'/account'}/>
                            <Drawer.Link icon={<FaList/>} text={'My Links'} to={'/links'}/>

                            <Drawer.LinkGroup icon={<FaUserTie/>} title={'Admin'}>
                                <Drawer.Link group icon={<FaListCheck/>} text={'URL Links'} to={"/admin/links"}/>
                                <Drawer.Link group icon={<FaUsers/>} text={'Users'} to={"/admin/users"}/>
                                <Drawer.Link group icon={<FaGear/>} text={'Settings'} to={"/admin/settings"}/>
                            </Drawer.LinkGroup>
                        </Drawer.Links>

                        <Drawer.BottomLinks>
                            <Drawer.Button icon={<FaArrowRightFromBracket />} text={'Logout'} action={logout} />
                        </Drawer.BottomLinks>
                    </Drawer.Content>

                </Drawer>

                <div className="capitalize font-bold text-xl">URL Shortener</div>

                <div className="ms-auto flex gap-4 items-center">
                    <form className="max-w-md mx-auto hidden md:block">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <FaMagnifyingGlass className="w-4 h-4 text-gray-300 " />
                            </div>
                            <input type="search" id="default-search"
                                   className="block min-w-96 p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-full bg-transparent focus:ring-red-500 focus:border-red-500 placeholder:text-gray-300"
                                   placeholder="Search..." required/>
                            <button type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2">Search
                            </button>
                        </div>
                    </form>
                    <div className="font-medium text-lg">Admin</div>
                </div>
            </div>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer className={'text-center p-4 bg-gradient-to-l from-indigo-600 to-indigo-500 text-white font-medium'}>&copy; Copyright, URL Shortener Created by Happy Lakudzala.</footer>
    </div>
  )
}
