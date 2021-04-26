import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {menu_styles} from "../styles/MenuStyles";
import Link from "next/link";

const Header = ({img = true, children, ...props}) => {

    const router = useRouter();

    const navButtons = [
/*        {
            label: "Home",
            path: "/home",
        },*/
        {
            label: "Viatges d'Autor",
            path: "/viatge_autor",

        },
        {
            label: "Destinacions",
            path: "/destinacions",

        },
/*        {
            label: "Fitxa viatges d'autor",
            path: "/fitxa_viatge_autor",

        },
        {
            label: "Fitxa viatges destinacions",
            path: "/fitxa_viatge_destinacio",

        },*/
        {
            label: "Sobre nosaltres",
            path: "/nosaltres",

        },
        {
            label: "Blog",
            path: "/blog",

        },
  /*      {
            label: "Blog article",
            path: "/blog_article",

        },*/

    ];

    return (
        <div  css={menu_styles}>

            {
                navButtons.map((item,index)=>{
                    return(
                        <div className={"columna"}>
                            <Link href={item.path}>
                                <a className={`NavButton ${router.pathname === item.path ? "active" : ""}`}>

                                    <span className={"item"}>{item.label}</span>
                                </a>
                            </Link>
                        </div>
                    )
                })
            }




        </div>
    );

};


export default Header;



