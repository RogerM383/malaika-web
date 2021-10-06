import React, {useContext, useState, useEffect, useRef} from 'react';
import {useRouter} from "next/router";
import {menu_styles} from "../styles/MenuStyles";
import Link from "next/link";
import {GET_MENU_BY_NAME} from "../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";
import Image from "../../package/components/Image";
import {useWindowSize} from "../../package/hooks/useWindowSize";
import {useTheme} from "@emotion/react";
import {LaunguageContext, LaunguageContextProvider} from "../contexts/LanguageContext";

const Menu = ({img = true, children, ...props}) => {

    // --- MENU --------------------------------------------------------------------------------------------------------
    const [navButtons, setNavButtons] = useState(null);
    const [getMenu, {loading: loadingMenu, error: errorMenu, data: menuData}] = useLazyQuery(GET_MENU_BY_NAME);

    const {language,setLanguage} = useContext(LaunguageContext)

    useEffect(() => {
        /**
         *  TODO: poner el idioma dinamico, supongo que por langContext, y mirar si tendremos que
         *  remplazar el idioma al final de la pagina al igual que signe con los paises
         */
        getMenu({variables: {name: language.language === 'CA' ? 'Header CAT' : 'Header ES' , first: 50}});
    },[language]);

    useEffect(() => {
        if (menuData) {
            const items = menuData.menu.menuItems.nodes;

            debugger
         /*   const menu = items.filter(item => item.label !== 'Blog' && item.parentId === null).map((item) => {*/
            const menu = items.filter(item => item.parentId === null).map((item) => {
                const path = item.path !== '#' ? item.path.replace('/index.php','') : null;
                return {
                    id: item.id,
                    label: item.label.toUpperCase(),
                    path,
                    order: item.order,
                    submenu: []
                }
            });
     /*       const subItems = items.filter(item => item.label !== 'Blog' && item.parentId !== null);*/
            const subItems = items.filter(item =>  item.parentId !== null);
            for (let subItem of subItems) {
                let parent = menu.find(item => item.id === subItem.parentId);
                parent.submenu.push({
                    id: subItem.id,
                    label: subItem.label.toUpperCase(),
                    path: '/' + parent.label.toLowerCase() + subItem.path.replace('/index.php',''),
                    order: subItem.order
                });
            }
            if (menu && (router.pathname === "/inici" || router.pathname === "/inicio" )) {
                menu.push({id: 'amics-museu', label: "AMICS", path: "https://reservesmnac.malaikaviatges.com/", image: "amics-mnac.png", submenu: []});
            }
            setNavButtons(menu);
        router
            debugger
        }
    },[menuData]);
    // -----------------------------------------------------------------------------------------------------------------

    const router = useRouter();
    const [active, setActive] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [maxMenuWidth, setMaxMenuWidth] = useState(0);
    const [maxMenuHeight, setMaxMenuHeight] = useState(0);
    const {width, height} = useWindowSize();
    const mobileMenu = useRef(null);
    const nav = useRef(null);
    const theme = useTheme();

    useEffect(() => {
    setActive(false)
    }, [router]);


    const handleScroll = () => {
        if (nav.current) {
            const offset = window.scrollY;
            const point_sticky = window.innerHeight;
            setSticky(offset + nav.current.getBoundingClientRect().height > point_sticky);
            /*  console.log("offset" + offset)
              console.log("point sticky" + point_sticky)*/
            //setMaxMenuWidth(calcMaxMenuWidth);
        }
    }

    // --- Scroll event listener ---------------------------------------------------------------------------------------
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /*useEffect(() => {
        setMaxMenuHeight(mobileMenu.current.getBoundingClientRect().height);
    }, [width, height]);

    const calcMaxMenuWidth = () => {
        return ( window.scrollY  * 100 / width)
    }*/

    useEffect(() => {
        if (mobileMenu.current) {
            //setMaxMenuWidth(calcMaxMenuWidth);
            setMaxMenuHeight(mobileMenu.current.getBoundingClientRect().height);
        }
    }, [mobileMenu]);



    const burguerClick = (e) => {
        setActive(!active);
    }

    useEffect(() => {
        if(width > 992){
            setActive(false);
           /// console.log(width)
        }
    }, [width]);

/*    useEffect(() => {

     console.log(calcMaxMenuWidth())
    }, [maxMenuHeight]);*/


    return (
        <div css={menu_styles}>

            {/*<div className={`containers ${sticky === true  ? 'sticky' : ''}`}>*/}

                <nav className={`navbar${active ? ' active' : ''}${sticky ? ' sticky' : ''}`}
                     style={{
                         maxHeight: active || height <= 995 ? '100vh' :  maxMenuHeight
                     }}
                     ref={nav}>

                    <div className={'mobile'} ref={mobileMenu}>
                        <Image src={"/logo.png"}/>
                        <i className="fas fa-bars fa-2x" id="burger" onClick={burguerClick}/>
                    </div>

                    <ul className={`nav-links ${active}`}>

                        {
                            navButtons &&
                            navButtons.map((button, index, array) => {
                                return (
                                    <>
                                        <li key={index}  className={`navli
                                        ${( (router.pathname === "/inici" || router.pathname === "/inicio" ) && array.length - 1 === index) ? "amics" : "normal"} ${index === 0 && "first"}`}>
                                            <Link href={button?.path ?? ''}>
                                                <a className={`NavButton ${(router.pathname.replace(/\//g, "") === button?.path?.replace(/\//g, "")) && button?.path !== undefined ? "active_link" : ""}`}>
                                                    {button.icon}
                                                    <span css={{textAlign: 'center', display: 'inline-block'}}>
                                                    {
                                                        button.image &&
                                                        <div>
                                                            <img src={button.image}/>
                                                        </div>

                                                    }
                                                    {
                                                        !button.image &&
                                                        (button.label !== "ANIMALS INVISIBLES" && button.label !== "ANIMALES INVISIBLES") &&
                                                        button.label
                                                    }
                                                    {
                                                        !button.image &&
                                                        (button.label === "ANIMALS INVISIBLES" || button.label === "ANIMALES INVISIBLES") &&
                                                        <div css={{maxHeight:'80px'}}>
                                                            <img className={"animals"} src={button.label === "ANIMALS INVISIBLES" ? "/animal-invisibles.png"
                                                            : "/animales-invisibles.png"}/>
                                                        </div>

                                                    }


                                                    </span>
                                                </a>
                                            </Link>
                                            {
                                                button.submenu.length > 0 &&
                                                <div className={`dropdown-content ${active ? 'mobile_menu ' : ''} `}>
                                                    {
                                                        button.submenu.map((item) => {
                                                            return (
                                                                <Link href={item.path} passHref={true}>
                                                                    <a>{item.label}</a>
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }

                                         {/*   <li className={'separator'}/>*/}
                                        </li>

                                    </>
                                )
                            })
                        }

                    </ul>

                </nav>
            </div>
        /*</div>*/
    );
};

export default Menu;

/*
const navButtons = [
    {
        label: "VIATGES D'AUTOR",
        path: "/viatge-destinacio-autor",

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
        path: "/viatge-destinacio-autor",

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


];*/


