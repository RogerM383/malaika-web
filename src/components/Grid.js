import React, {useContext, useState, useEffect} from 'react';
import {css} from "@emotion/react";

const Grid = ({size, children, ...props}) => {


    return (
        <div className={"div"}  {...props} >
            {children}
        </div>
    );

};


export default Grid;



