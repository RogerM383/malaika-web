import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        color:black;
        background-color: white;
        height: 100px;
        text-align: center;
        width: 100%;
        border-top-right-radius: 50px;
        align-items: center;
        margin-right: 3rem;

      & > .columna{
          //border-right: 1px solid black;
          background-color: white;
      }

      & > .columna:last-of-type{
        border-right:0;

      }

      a{
        color: black;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        position: relative;
        display: block;


      }

        .columna:last-of-type{
            background-color: transparent;
            padding:1rem;
        }



      .item:first-of-type{

      }

      .active{
        color:${theme.colors.primary};

      }


        @media (min-width: 40.0rem) {
            width: 85%;
        }


    `;

    return [style];
}
