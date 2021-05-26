import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import MaxWidthContainer from "./MaxWidthContainer";

const Header = ({img = true,title=false, children, ...props}) => {

    const router = useRouter();
    return (
        <div css={[header_styles, {backgroundImage: "url(" + img + ")"}]}>

            <MaxWidthContainer className={'header-max-container'}>

                <div className={'content'}>

                    <a className={'logo'} href={"/home"}>
                        <Image alt={'Malaika'} src={"/logo.png"}/>
                    </a>

                    <div className={"info"}>

                        <span className={"contact"}>
                            <Image src={"phone_icon.png"}/>
                            <a href="tel:34930011176">+34 930 011 176</a>
                            <Image src={"mail_icon.png"}/>
                        </span>

                        <span className={"language"}>
                            <span>Català</span> / <span>Castella</span>
                        </span>

                    </div>

                    <div className={"title"}>
                        {title}
                    </div>
                </div>



            </MaxWidthContainer>
            <Menu/>
        </div>
    );
};


export default Header;



