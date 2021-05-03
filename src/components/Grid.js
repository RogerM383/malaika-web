import React, {useContext, useState, useEffect} from 'react';
import {css} from "@emotion/react";

const Grid = ({size , children, ...props}) => {


    const style = css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
            grid-auto-rows: minmax(200px, auto);
            row-gap: 5rem;
            grid-column-gap: 3rem;

        @media(min-width: 40rem){
            grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));

        }
    `;


    return (
        <div className={"div"} css={style}  >
            {children}
        </div>
    );

};


export default Grid;



