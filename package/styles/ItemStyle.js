import {css, jsx} from "@emotion/react";


export const main = (theme) => {
    const style = css`
        margin: 0 1rem;
        padding: 0.5rem;
        display: flex;



        .content{
            margin: 0 1rem;
            padding: 0.5rem;

          &  .title{
                display: block;
                font-size: 2rem;
            }

          &  .text{}


        }


    `;
    return [style];
};




