import {useState, createContext, useContext, Fragment} from "react";
import {NavLink} from "react-router";

const NavigationContext = createContext();

const Drawer = ({children}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <NavigationContext.Provider value={{open, setOpen, toggleOpen}}>
            {children}
        </NavigationContext.Provider>
    );
};


const Trigger = ({children}) => {
    const {open, setOpen, toggleOpen} = useContext(NavigationContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && (
                <div
                    className="fixed inset-0 z-40 bg-gray-900/10"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
}

const Content = ({width, children, title}) => {
    const {open, setOpen} = useContext(NavigationContext);

    return <div
        className={`fixed top-0 left-0 z-40  flex flex-col h-screen p-4 overflow-y-auto transition-transform ${open ? '' : '-translate-x-full'} bg-white w-full md:w-96 border-e shadow-sm `}>
        <h5 className="text-base font-semibold text-gray-500 uppercase ">{title ? title : "Menu"}</h5>
        <button type="button" onClick={() => setOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>

        <div className="flex-1 relative flex flex-col">
            {children}
        </div>
    </div>
}

const Links = ({children}) => {
    return <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
            {children}
        </ul>
    </div>
}

const BottomLinks = ({children}) => {
    return <div className="mt-auto">
        <ul className="space-y-2 font-medium">
            {children}
        </ul>
    </div>
}

const Link = ({text, icon, to, group}) => {
    return <li>
        <NavLink to={to}
                 className={`flex items-center p-2 w-full ${group ? 'pl-11' : ''} text-gray-900 rounded-lg  hover:bg-gray-100 group`}>
            {icon}
            <span className="ms-3">{text}</span>
        </NavLink>
    </li>
}

const Button = ({
                    text, icon, group = false, action = () => {}
                }) => {
    return <li>
        <button
            onClick={action}
            className={`flex items-center p-2 w-full ${group ? 'pl-11 ' : ''} text-gray-900 rounded-lg  hover:bg-gray-100 group`}>
            {icon}
            <span className="ms-3">{text}</span>
        </button>
    </li>
}

const LinkGroup = ({children, title, icon}) => {
    const [isOpen, setOpen] = useState(false);

    return <li>
        <button onClick={() => setOpen(s => !s)}
                className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group   ${isOpen ? " bg-gray-100" : " hover:bg-gray-100"}`}
        >
            {icon}
            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{title}</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 1 4 4 4-4"/>
            </svg>
        </button>

        <ul className={`${isOpen ? "" : "hidden"} py-2 space-y-2`}>
            {children}
        </ul>
    </li>
}


Drawer.Trigger = Trigger;
Drawer.Content = Content;
Drawer.Links = Links;
Drawer.BottomLinks = BottomLinks;
Drawer.Link = Link;
Drawer.LinkGroup = LinkGroup;
Drawer.Button = Button;

export default Drawer;