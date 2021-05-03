import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {menu_styles} from "../styles/MenuStyles";
import Link from "next/link";

const Header = ({img = true, children, ...props}) => {

    const router = useRouter();


    const navButtons = [
        {
            label: "VIATGES D'AUTOR",
            path: "/viatge_autor",

        },
        {
            label: "DESTINACIONS",
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
            label: "SOBRE NOSALTRES",
            path: "/nosaltres",

        },
        {
            label: "BLOG",
            path: "/blog",

        },



    ];

    const [menu, setMenu] = useState(navButtons);

    useEffect(() => {
     if(router.pathname === "/home"){
         setMenu([
             ...menu,{  label: "AMICS",path: "/blog",}])
     }
    }, [router]);




    return (
        <div  css={menu_styles}>

            {
                menu.map((item,index)=>{
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



