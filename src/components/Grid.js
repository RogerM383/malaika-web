import React, {useContext, useState, useEffect} from 'react';
import {css} from "@emotion/react";

const Grid = ({size , children, ...props}) => {


    const style = css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr)); /* see notes below */
            grid-auto-rows: minmax(200px, auto);
             row-gap: 5rem;
        grid-column-gap: 3rem;
    `;


    return (
        <div className={"div"} css={style}  >
            {children}
        </div>
    );

};


export default Grid;



