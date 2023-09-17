import { useState } from "react";
import MenuNavbar from "./MenuNavbar";
import MenuButton from "./MenuButton";
import LogoNavbar from "./LogoNavbar";
import Search from "./Search";
import Logout from "../../views/Auth/Logout";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!open);
    };

    return (
        <div >
            <div className="antialiased dark-mode:bg-gray-900 relative z-50 ">
                <div className="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800  bg-gray-200  ">
                    <div className="flex flex-col  max-w-screen-xl px-4 mx-auto f md:items-center md:justify-between md:flex-row md:px-4 lg:px-4">

                        <div className="flex flex-row items-center justify-between p-4">

                            <LogoNavbar />
                            <Link to={`/dashboard`} >
                                <MenuNavbar text="Dashbord" />
                            </Link>
                            <button
                                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                                onClick={toggleNavbar}
                            >
                                <MenuButton open={open} />
                            </button>

                        </div>

                        <div className="w-3/5">
                            <nav
                                className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-evenly md:flex-row`}
                            >
                                <CartItem />
                                <MenuNavbar text="Categories" target="categorySection" />
                                <MenuNavbar text="About" target="aboutSection" />
                                <MenuNavbar text="Contact" target="contactSection" />
                                <Search />
                                <Logout className="w-4 h-4" />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


//     return (
//         <div>
//             {/* Your welcome section here */}
//             <div className="welcome-section">
//                 {/* Content of your welcome section */}
//             </div>

//             {/* Navbar */}
//             <div className={`navbar ${open ? 'open' : ''}`}>
//                 <div className="antialiased dark-mode:bg-gray-900">
//                     <div className="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 bg-gray-200">
//                         <div className="flex flex-col max-w-screen-xl px-4 mx-auto f md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">

//                             <div className="flex flex-row items-center justify-between p-4">

//                                 <LogoNavbar />
//                                 <button
//                                     className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
//                                     onClick={toggleNavbar}
//                                 >
//                                     <MenuButton open={open} />
//                                 </button>
//                             </div>

//                             <div className={`w-3/5`}>
//                                 <nav
//                                     className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-evenly md:flex-row`}
//                                 >
//                                     <Logout />
//                                     <MenuNavbar href="#" text="Blog" />
//                                     <MenuNavbar href="#" text="About" />
//                                     <MenuNavbar href="#" text="Contact" />
//                                     <Search />
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
