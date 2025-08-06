import React from "react";
import Link from "next/link";
import { main } from "../../package/styles/SectionStyle";


const Section = ({title = null, url = null, textButton,children, ...props}) => {
    const route = url || "/"
    return (
        <section css={main} {...props}>
            <div className="header" >
                {
                    title &&
                    <span className="title">{title}</span>
                }

                {
                    url &&
                    <Link legacyBehavior  /*href={route}*/>
                        <a className="column link" >{textButton ?? "Ver más"} <i className="fas fa-arrow-right"/></a>
                    </Link>
                }
            </div>

            <div className={"content"}>
                {children}
            </div>
        </section>
    )
}

export default Section;
