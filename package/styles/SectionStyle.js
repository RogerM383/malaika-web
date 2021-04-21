import {css, jsx} from "@emotion/react";


export const main = (theme) => {
    const style = css`
        margin: 0 1rem;
        padding: 0.5rem;
       // background-color: lightgray;

        .header {

            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .title {

                font-size: 3rem;
            }

            .link {

            }

        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            //width: 100%;


        }
    `;
    return [style];
};




