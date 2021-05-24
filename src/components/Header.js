import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import MaxWidthContainer from "./MaxWidthContainer";

const Header = ({img = true,title=false, children, ...props}) => {

    const router = useRouter();
    return (
        <div  css={header_styles}>
            <div  css={{backgroundImage: "url(" + img + ")"}}>

                <MaxWidthContainer className={"content"}>

                    <div className={" row_top"}>
                        <a href={"/home"}>
                            <Image  src={"/logo.png"}></Image>
                        </a>



                        <div className={"contact_language"}>
                            <div className={"contact"}>
                                <Image src={"phone_icon.png"}/>
                                <span  className={"fs-13 bold"}><a href="tel:34930011176">+34 930 011 176</a></span>
                                <Image src={"mail_icon.png"}/>
                            </div>

                            <div className={"language"}>
                                <span className={"fs-14  "}>Català / Castella</span>
                            </div>

                        </div>
                    </div>

                    <div className={"row row_middle didot bold fs-50"}>
                        <span>{title} </span>
                    </div>


                </MaxWidthContainer>


                   <Menu></Menu>

            </div>

        </div>
    );

};


export default Header;



