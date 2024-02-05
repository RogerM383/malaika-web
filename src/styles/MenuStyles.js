import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`


        .animals{

            display: block;
            max-width:100%;
            max-height:50px;
            height: 100%;
            padding: 0;

        }

        ${theme.mq('tablet-landscape')} {
            .animals {
                max-height: 90px;
            }
        }

        .sticky{
            .animals{
                padding: 0.5rem;
            }
        }


        .nav-links.true{
            overflow-y: auto;
            height: 100vh;
            .animals{
                padding: 0;
            }

        }


        .navbar {

            display: flex;
            flex-direction: column;
            max-width: 100%;
            width: 100%;
            align-items: center;
            background-color: ${theme.colors.white};
            border-top-right-radius: ${theme.header.menu.border_top_right_radius};
            position: relative;
            z-index: 999;
            transform: translateX(0%) translateY(-99%);
            overflow: hidden;
            //transition: width 1s ease-in-out, max-height 1s ease-in-out, max-width .5s, opacity .5s, border-top-right-radius 1s;
            transition: all 1s ease-in-out;

            &.sticky {
                transform: translateY(0%);
                position: fixed;
                top: 0;
               //max-width: ${theme.container.max_width};
                width: 100vw !important;
              
                li{
                    border-top-right-radius:initial;
                }
            }

            .active_link{
                span{
                    color:${theme.colors.primary}!important;
                }

            }

            &.active {
                //transform: translateY(0);
                ul.nav-links {
                    display: initial;
                }
            }

            .mobile {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem ${theme.header.padding_horizontal};
                img {
                    filter: invert(50%);
                    max-width: 10rem;
                    transition: all 1s;
                }
                i {
                    color: ${theme.colors.primary};
                    font-size: 2rem;
                    transition: opacity 1s;
                }
            }

            ul.nav-links {
                padding: 0 0;
                max-width: 100%;
                width: 100%;
                //display: none;
                font-family: ${theme.font.quicksand};
                text-align: center;
                align-items: center;
                min-height: 50px;


                li {
                    width: 100%;
                    position: relative;
                    //padding: 0 1rem;

                     display: flex;
                    flex-direction: column;
                    justify-content: center;




     /*             display: flex;
                  flex-direction: column;
                  justify-content: center;*/
                    //height: 80px;
                  //  padding:1rem;
/*                    :after {
!*
                        content: url('../slash.png');
                        display: block;
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        display: block;*!

                       position: absolute;
                        right: 0;
                        font-family: "Font Awesome 5 Free";
                        font-weight: 400;
                        content: "\\f715";
                        color:#D8D8D8;


                    }*/



                    &.separator {
                        display: none;
                    }
                    span {
                        color: ${theme.colors.black};
                        font-size: ${theme.font.s};
                        font-weight: ${theme.font.bold};
                        padding:0 0.3rem;
                    }
                }

                .normal:after {
                    content:none;
                }

                .first:after{
                    content:none;
                }

            }

            .amics{

                border-top-right-radius: ${theme.header.menu.border_top_right_radius};
       /*         background-color: #4B4C4C;
                border: 3px solid #4B4C4C;*/

                /*background-color: #0D0D0D;
                border: 3px solid #0D0D0D;*/

                background-color: #2b2a25;
                border: 3px solid #2b2a25;

                padding:0!important;

                img{
                    border-top-right-radius: ${theme.header.menu.border_top_right_radius};
                    width: 100%;
                    max-height: 100px;
                    padding:0;
                    object-fit: contain;
                }
            }





        }

        // DROP DOWMN DESTINACIONES *************************!/
          .navli{
              display: block;
              padding: 1rem 0;
              position: relative;

          }
        & .navli:hover .dropdown-content {

            padding: 1.2rem 1.6rem;
            height: initial;
            max-height: 1500px;
            transition: max-height 0.25s ease-in;

        }

        .dropdown-content {

            display: block;
            max-height: 0;
            transition: max-height 0.25s ease-out;
            height: 0;
            padding: 0;
            overflow: hidden;
            position: absolute;
            background-color: ${theme.colors.white};
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            margin-top: .3rem;
            z-index: 1;
            min-width: 16rem;
            top:50%;
            left: 50%;
            transform: translate(-50%, 5%);


            & > a {
                display: block;
                padding-top: 1rem;
                margin-bottom: 1rem;
                white-space: nowrap;
                color: ${theme.colors.black};
                font-size: ${theme.font.s};
                font-weight: ${theme.font.bold};

                :hover{
                    text-decoration: underline;
                }
            }

            li {
                padding: 2rem;
                a {
                    &::after {
                        background-color: ${theme.colors.primary};
                    }
                }
            }

            button {
                border-color: ${theme.colors.primary};
                color: ${theme.colors.primary};
                padding: 0.75rem 1.5rem;
            }

            &.active {
                display: block;
                transform: translateX(0%);
            }
        }

        .mobile_menu{

            display: block;
            height: initial;
            position: relative;
            padding: 1.2rem 1.6rem;
            max-height: 1500px;
            box-shadow: initial;



        }

        // END DROP DOWMN DESTINACIONES *************************!/




        ${theme.mq('tablet-landscape')} {
            .navbar {
                max-width: 85%;
                overflow: initial;
                .mobile {
                    position: absolute;
                    img {
                        transform: translateX(-200%);
                        opacity: 0;
                    }
                    i {
                        opacity: 0;
                    }
                }

                &.sticky {
                    max-width: 100%;

                }

                &.active ul.nav-links {
                    display: flex;
                }

                ul.nav-links {
                    max-width: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  //  padding: 1rem 0;
                    align-items: center;
                    z-index: 1;


                    li {

                        height: 105px;
                        padding: 0 1rem;



                    }




                    .normal:after {
      /*                  content: "";
                        top:10%;*/

                        content: "/";
                        top: 20%;

                        font-size: 60px;
                        position: absolute;
                        width: 0;
                        height: 80%;
                        z-index: -1;
                        left: -5%;

                        font-weight: 100;
                        color:lightgray;
                        font-family: Didot;

                        display: inline-block;




/*                        border:2px solid ${theme.colors.light_gray};
                        border-radius: 1000px;
                        border-right: 0;

                        transform-origin: bottom right ;
                        -ms-transform: skew(-30deg, 0deg);
                        -webkit-transform: skew(-30deg, 0deg);
                        transform: skew(-30deg, 0deg) translateX(100%);*/
                    }

                    .first:after{
                        content:none;
                    }

                }



            }




        }

    `;

    return [style];
}
