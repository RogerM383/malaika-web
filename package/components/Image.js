import React, {useEffect, useState} from "react";
import Loader from "./Loader";
import useImage from "../hooks/useImage";
import {main} from "../styles/ImageStyle"

const Image = ({key, src, alt, ...props}) => {

    const [_src, setSrc] = useState(null)
    const {hasLoaded, hasError} = useImage(_src);

    useEffect(() => {
        if (src) {
            setSrc(src);
        }
    },[src]);

    return (
        <>
            {
                !hasLoaded && !hasError && <Loader/>
            }
            {
                <img css={main} key={key} src={!hasError ? _src : process.env.NEXT_PUBLIC_DEFAULT_IMG} alt={alt} {...props}/>
            }
        </>
    );
};

export default Image;
