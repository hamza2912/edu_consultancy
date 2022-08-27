import React from "react";
import {isMobile} from 'react-device-detect';
// import { useHistory } from 'react-router-dom';


function Header() {

    const [showNav, setshowNav] = React.useState(false);
    const [showdropdown, setshowdropdown] = React.useState(false);
    // let history = useHistory();

    React.useEffect(() => {
        if(!isMobile){
            setshowNav(true);
        }
    }, []);
    
    return (

        <header class="bg-transparent absolute top-0 left-0 w-full">
            <nav className="container mx-auto lg:py-10 py-6 lg:px-16 px-6 flex flex-row justify-between items-center w-full">
                <div class="w-1/3 flex justify-start">
                    <div class="logo">
                        <a href="/">
                            {/* <img src="images/logo/logo.png" alt="Consultancy Logo" /> */}
                            <h1 className="text-2xl text-black font-semibold">Logo</h1> 
                        </a>
                    </div>
                </div>
                {!showNav ? 
                    <i className="fa-bars fa-solid text-lg text-black lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i> :
                    <i className="fa-times fa-solid text-lg lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i>}
                {showNav ?
                    <div class="lg:w-1/3 w-full lg:relative absolute lg:bg-transparent bg-white flex lg:flex-row flex-col justify-between items-center lg:h-auto h-1/2  lg:text-black text-black top-0 left-0 py-12 lg:py-0 fade-in">
                        <a href="#">Home</a>
                        <a className="lg:mt-0 mt-8" href="#about">About Us</a>
                        <a className="lg:mt-0 mt-8" href="#services">Services</a>
                        <a className="lg:mt-0 mt-8" href="#contact">Contact Us</a>
                    </div> : null}
                    <div className="w-1/3 lg:flex justify-end hidden">
                        <img className="w-10" src="images/icons/uk_flag.svg" alt="UK Flag" />
                    </div>
            </nav>
        </header>

    );
}

export default Header;
