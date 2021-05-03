import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`

        display: flex;
        flex-wrap: wrap;

        color:black;
        background-color: white;
        height: 100px;
        text-align: center;
        width: 100%;
        border-top-right-radius: 50px;
        align-items: center;
       // margin-right: 3rem;

      & > .columna{
          //border-right: 1px solid black;
        flex: 1 0 auto;
          background-color: white;
      }

      > .columna{
        .NavButton::after{
          content:"/";
          font-size: 40px;
          position: absolute;
          right: -10px;
          top: -15px;
          bottom: 0;
          font-weight: 100;
          color:lightgray;
        }
      }

      & > .columna:last-of-type{
        border-right:0;

        .NavButton::after{
          content:"";
          position: absolute;
          right: 0;
        }

      }

      a{
        color: black;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        position: relative;
        display: block;


      }



      /*
      .NavButton:last-child:after{
        content:"";
        position: absolute;
        right: 0;
      }
      */


        .columna:last-of-type{
            background-color: transparent;
            padding:1rem;
        }



      .item{


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
