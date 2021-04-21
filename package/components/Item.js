import React from "react";
import Link from "next/link";
import { main } from "../../package/styles/ItemStyle"
import Image from "./Image";


const Item = ({title = null, text =null, img = null, children, ...props}) => {

    return (
        <div css={main} {...props}>
            {
                img &&
                <Image src={img}></Image>

            }
            <div className={"content"}>
                {
                    title &&
                    <span className={"title"}>{title}</span>
                }


                {
                    text &&
                    <span className={"text"}>{text}</span>
                }

                {children}
            </div>


        </div>
    )
}

export default Item;
