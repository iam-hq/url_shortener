import {Outlet, useNavigate} from "react-router";
import Container from "../components/Container";
import {useEffect} from "react";

export default function AuthLayout() {
    const navigate = useNavigate();
    const token = null;

    useEffect(() => {
        if(token) navigate("/");
    }, []);
    return (<div className={'bg-gray-100 min-h-screen relative grid grid-cols-1 items-center'}>
        <Container padding={'p-0'}>
            <div className="md:grid grid-cols-2 gap-4">
                <div className="w-full h-[15vh] md:h-[60vh]">
                    <img src="/img/img1.jpg" className={'w-full h-[15vh] md:h-[60vh] rounded-t rounded-b-xl md:rounded-r-lg object-cover'} alt=""/>
                </div>
                <Outlet />
            </div>
        </Container>
    </div>)
}