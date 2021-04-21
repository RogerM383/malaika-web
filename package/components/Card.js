import React from 'react';
import useImage from "../hooks/useImage";
import Image from "./Image";
import {main} from "../styles/CardStyles"

const Card = ({
                  title = null,
                  img = null,
                  alt,
                  children,
                  icon = null,
                  ...props
              }) => {

    const {hasLoaded: imageLoaded, hasError} = useImage(img);

    return (
        <div css={main} {...props}>
            <div className={'inner'}>
                {
                    title &&
                    <h6>{title}</h6>
                }
                {
                    icon &&
                    <i className={icon}/>
                }
                {

                    !hasError && img !== null ?
                        <Image src={img} alt={alt || title || ''}/> :
                        hasError && img !== null ?
                            <Image src={process.env.NEXT_PUBLIC_DEFAULT_CART_IMG || ''} alt={alt || title || ''}/> : null
          /*                  :
                            <Image src={''} alt={alt || title || ''}/>*/
                }

                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card;
