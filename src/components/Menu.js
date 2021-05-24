import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {menu_styles} from "../styles/MenuStyles";
import Link from "next/link";
import Image from "../../package/components/Image";
import {brown} from "@material-ui/core/colors";

const Header = ({img = true, children, ...props}) => {

    const router = useRouter();


    const [menu, setMenu] = useState(navButtons);


    const [sticky,setSticky]=React.useState(false);

    const handleScroll=() => {
        const offset = window.scrollY;
        const point_stiky = window.innerHeight;

        console.log(offset);
        if(offset + 80 > point_stiky ){
            setSticky(true);
         //   setMenu( [ {label: "AMICS", path: "/blog", image: "logo.png"},...navButtonsHome])
        }
        else{
            //setMenu( navButtonsHome)
            setSticky(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })



    useEffect(() => {
        if (router.pathname === "/home") {
            setMenu(navButtonsHome)
        }
    }, []);


    const [active, setActive] = useState(null);
    const burguerClick = (e) => {
        setActive(active === 'active' ? null : 'active')
    }

    return (
        <div css={menu_styles}>

            <div className={`containers ${sticky=== true  ? 'sticky' : ''}`}>
                <nav className="navbar">


                    <ul className={`nav-links ${active}`}>


                     <img src={"logo.png"}  className={`containers ${sticky=== true  ? 'img_sticky' : 'img_no_sticky'}`}/>

                        {
                            navButtons &&
                            menu.map((button, index,array) => {
                                return (


                                <li key={index}  className={`${(router.pathname === "/home" && array.length -1 === index) ? "amics" : "normal"}`}>
                                        <Link href={button?.path ?? ''}>
                                            <a className={`NavButton ${router.pathname === button.path ? "active" : ""}`}>
                                                {button.icon}
                                                <span css={{textAlign: 'center', display: 'inline-block'}}>

                                                    {
                                                        button.image &&
                                                        <div>
                                                            <img src={button.image}/>
                                                        </div>

                                                    }
                                                    {!button.image &&
                                                    button.label
                                                    }


                                                    </span>

                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/*icono del burguer*/}
                    <i className="fas fa-bars fa-2x" id="burger" onClick={burguerClick}/>

                </nav>
            </div>


        </div>
    );

};


export default Header;


const navButtons = [
    {
        label: "VIATGES D'AUTOR",
        path: "/viatge-autor",

    },
    {
        label: "DESTINACIONS",
        path: "/destinacions",

    },
    {
        label: "SOBRE NOSALTRES",
        path: "/nosaltres",

    },
    {
        label: "BLOG",
        path: "/blog",

    },


];

const navButtonsHome = [
    {
        label: "VIATGES D'AUTOR",
        path: "/viatge-autor",

    },
    {
        label: "DESTINACIONS",
        path: "/destinacions",

    },
    {
        label: "SOBRE NOSALTRES",
        path: "/nosaltres",

    },
    {
        label: "BLOG",
        path: "/blog",

    },
    {label: "AMICS", path: "/blog", image: "amics_museu.svg"}


];


