import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";


const Index = ({children, ...props}) => {

    const router = useRouter();

    const navButtons = [
        {
            label: "Home",
            path: "/home",
            //icon: <i className="fas fa-2x fa-chart-line" ></i>
        },
        {
            label: "Viatges d'Autor",
            path: "/viatge_autor",
            //icon: <i className="fas fa-2x fa-chart-line" ></i>
        },
        {
            label: "Destinacions",
            path: "/destinacions",
            // icon: <i className="fas fa-2x fa-object-ungroup" ></i>
        },
        {
            label: "Fitxa viatges d'autor",
            path: "/fitxa_viatge_autor",
            //icon: <i className="fas fa-2x fa-cogs"></i>
        },
        {
            label: "Fitxa viatges destinacions",
            path: "/fitxa_viatge_destinacio",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Sobre nosaltres",
            path: "/nosaltres",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Blog",
            path: "/blog",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Blog article",
            path: "/blog_article",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },

    ];

    return (
        <>
          {/*  <HeaderBurguer></HeaderBurguer>*/}
            <div>
                {
                    navButtons.map((button, index) => {
                        return (
                            <>
                                <Link key={index} href={button.path}>
                                    <a className={`NavButton ${router.pathname === button.path ? "active" : ""}`}>
                                        {button.icon}
                                        <span className={"label"}>{button.label}</span>
                                    </a>
                                </Link>
                                <br/>
                            </>
                        )
                    })
                }
            </div>

        </>


)
}

export default Index;
