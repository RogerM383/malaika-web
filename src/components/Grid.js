import React, {useContext, useState, useEffect} from 'react';
import {css} from "@emotion/react";

const Grid = ({size , children, ...props}) => {

    const grid_style = (theme) => {
    const style = css`
            display: grid;

           // grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
            grid-auto-rows: minmax(150px, auto);
            row-gap: 5rem;
            grid-column-gap: 2rem;
            grid-template-columns: repeat(1, 1fr);


           // grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));


        ${theme.mq('mobile-landscape')} {
            grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));
            //grid-template-columns: repeat(3, 1fr);
        }

    `;

        return [style];
    }


    return (
        <div className={"div"} css={grid_style}  >
            {children}
        </div>
    );

};


export default Grid;



