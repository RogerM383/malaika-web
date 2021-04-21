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
            label: "Uruk",
            path: "/uruk",
            //icon: <i className="fas fa-2x fa-chart-line" ></i>
        },
        {
            label: "Gouze",
            path: "/gouze",
            // icon: <i className="fas fa-2x fa-object-ungroup" ></i>
        },
        {
            label: "eTitulo",
            path: "/eTitulo",
            //icon: <i className="fas fa-2x fa-cogs"></i>
        },
        {
            label: "Certificados digitales",
            path: "/certificados_digitales",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Certificados en la nube",
            path: "/certificados_nube",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Firma electronica",
            path: "/firma_electronica",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Sellade de tiempo",
            path: "/sellado_tiempo",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Identidad digital",
            path: "/identidad_digital",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Ciudadania digital",
            path: "/ciudadania_digital",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Universidad inteligente",
            path: "/universidad_inteligente",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Industria 4.0",
            path: "/industria_4",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Sobre nosotros",
            path: "/sobre_nosotros",
            //icon: <i className="fas fa-2x fa-brush" ></i>
        },
        {
            label: "Contacta",
            path: "/contacto",
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
