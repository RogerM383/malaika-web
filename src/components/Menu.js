import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {menu_styles} from "../styles/MenuStyles";
import Link from "next/link";
import {GET_MENU_BY_NAME} from "../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";

const Header = ({img = true, children, ...props}) => {

    // --- MENU --------------------------------------------------------------------------------------------------------
    const [navButtons, setNavButtons] = useState(null);
    const [getMenu, {loading: loadingMenu, error: errorMenu, data: menuData}] = useLazyQuery(GET_MENU_BY_NAME);

    useEffect(() => {
        /**
         *  TODO: poner el idioma dinamico, supongo que por langContext, y mirar si tendremos que
         *  remplazar el idioma al final de la pagina al igual que signe con los paises
         */
        getMenu({variables: {name: 'Header CAT', first: 50}});
    },[]);

    useEffect(() => {
        if (menuData) {
            const items = menuData.menu.menuItems.nodes;
            const menu = items.filter(item => item.label !== 'Blog' && item.parentId === null).map((item) => {
                const path = item.path !== '#' ? item.path.replace('/index.php','') : null;
                return {
                    id: item.id,
                    label: item.label.toUpperCase(),
                    path,
                    order: item.order,
                    submenu: []
                }
            });
            const subItems = items.filter(item => item.label !== 'Blog' && item.parentId !== null);
            for (let subItem of subItems) {
                let parent = menu.find(item => item.id === subItem.parentId);
                parent.submenu.push({
                    id: subItem.id,
                    label: subItem.label.toUpperCase(),
                    path: subItem.path.replace('/index.php',''),
                    order: subItem.order
                });
            }
            if (menu && router.pathname === "/home") {
                menu.push({id: 'amics-museu', label: "AMICS", path: "/blog", image: "amics_museu.svg", submenu: []});
            }
            setNavButtons(menu);
        }
    },[menuData]);
    // -----------------------------------------------------------------------------------------------------------------

    const router = useRouter();
    const [sticky,setSticky] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        const point_stiky = window.innerHeight;
        if (offset + 80 > point_stiky ) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
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

                        {/* El logo deberia estar fuera del UL en un UL solo LIs!!!! */}
                        <img src={"logo.png"}  className={`containers ${sticky=== true  ? 'img_sticky' : 'img_no_sticky'}`}/>

                        {
                            navButtons &&
                            navButtons.map((button, index, array) => {
                                return (
                                    <li key={index}  className={`navli ${(router.pathname === "/home" && array.length -1 === index) ? "amics" : "normal"}`}>
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
                                                {
                                                    !button.image &&
                                                    button.label
                                                }
                                                </span>
                                            </a>
                                        </Link>
                                        {
                                            button.submenu.length > 0 &&
                                            <div className={"dropdown-content"}>
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


