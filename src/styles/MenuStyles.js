import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`

      display: flex;
      flex-wrap: nowrap;

      color: black;
      background-color: white;
      height: 100px;
      text-align: center;
      width: 100%;
      border-top-right-radius: 50px;
      align-items: center;
      // margin-right: 3rem;




      & > .columna {
        flex: 1 0 20%;
        background-color: white;

      }

      > .columna:not(:last-child) {
        .NavButton:after {
          content: "/";
          font-size: 40px;
          position: absolute;
          right: -10px;
          top: -15px;
          bottom: 0;
          font-weight: 100;
          color: lightgray;
        }
      }

      .ivan:last-child {
        .NavButton:after {
          content: "";
        }
      }


      a {
        color: black;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        position: relative;
        display: block;


      }


      .columna:last-of-type {
        background-color: transparent;
        padding: 1rem;
      }


      .item {


      }

      .active {
        color: ${theme.colors.primary};

      }

      .AMICS:last-child {
        border-top-right-radius: 50px;
        background-color: #4B4C4C;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        /*        background-image:url('/amics_museu.svg');
                background-position: center;*/

      }


      @media (min-width: 40.0rem) {
        width: 85%;
      }


      .lastBeforeAmics:nth-child(4) ::after{
        display: none;
      }

    `;

    return [style];
}
