import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`
        color:black;
        background-color: white;
        height: 100px;
        text-align: center;
        margin-right: 3rem;
        width: 80%;
        border-top-right-radius: 50px;

      & > .column{
       border-right: 1px solid black;
      }

      & > .column:last-of-type{
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


      .item:first-of-type{
        //background-color: lime;
      }

  /*      .item::after{
          content: '/';
        }*/

      .active{
        color:${theme.colors.primary};

      }


    `;

    return [style];
}
