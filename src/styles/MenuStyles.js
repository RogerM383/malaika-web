import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`


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
            transform: translateX(0%);
            overflow: hidden;
            transition: width 1s ease-in-out, max-height 1s ease-in-out, max-width .5s, opacity .5s, border-top-right-radius 1s;
            transform: translateY(-100%);

            &.sticky {
                transform: translateY(0%);
                position: fixed;
                top: 0;
                border-top-right-radius: 0;
                max-width: ${theme.container.max_width};
                width: 100%;
            }

            &.active {
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
                padding: 0 ${theme.header.padding_horizontal};
                max-width: 100%;
                width: 100%;
                display: none;
                font-family: ${theme.font.quicksand};
                li {
                    padding: 1rem 0;
                    &.separator {
                        display: none;
                    }
                    span {
                        color: ${theme.colors.black};
                        font-size: ${theme.font.s};
                        font-weight: ${theme.font.bold};
                    }
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
            left: 50%;
            transform: translate(-50%, 0);


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
                max-width: 66%;
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

                &.active ul.nav-links {
                    display: flex;
                }

                ul.nav-links {
                    max-width: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                  //  padding: 1rem 0;
                    align-items: center;
                    z-index: 1;

                    li {
                      //  padding: 0;
                        &.separator {
                            border-left: 1px solid darkgrey;
                            padding: 1.5rem 0px;
                            margin: 1rem 0;
                            transform: rotate(25deg);
                            display: initial;
                            &:last-of-type {
                                display: none;
                            }
                        }
                    }
                }
            }
        }

/*
        .img_sticky {
            filter: invert(50%);
            display:block
        }

        .img_no_sticky {
            display: none
        }

        .sticky {
            width: 100%;
            position:fixed;
            top:0;
        }

        .amics:last-of-type {
            background-color: #4B4C4C!important;
        }

        .containers {

            .navbar {
                position: relative;
                display: flex;
                flex: 1;
                align-items: flex-start;
                justify-content: space-between;
                background-color: white;
                border-top-right-radius: 25px;

                ul.nav-links {
                    // background-color: white;
                    display: none;
                    position: absolute;
                    // top: ${theme.header.mobile_screen_height};
                    //right: 0;
                    top:100px;
                    margin-left:  auto;
                    margin-right:  auto;
                    width: 100vw;
                    // padding: 0 2rem;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    transform: translateX(100%);
                    transition: 0.4s ease all;
                    z-index: 1000;
                    // background-color: lime;
                    background-color: ${theme.colors.white};
                    // border:1px solid black;
                    height: calc(100vh - ${theme.header.mobile_screen_height});

                    li {
                        background-color: white;
                        padding: 1rem;
                        margin: 1rem;
                        list-style: none;

                        &:last-of-type {

                            border-top-right-radius: 25px;
                        }

                        a {
                            color: black;
                            text-decoration: none;
                            font-weight: 700;
                            font-size: ${theme.font.medium};

                            &::after {
                                position: absolute;
                                content: '';
                                background-color: ${theme.colors.primary};
                                bottom: -5px;
                                left: 0;
                                width: 0;
                                height: 3px;
                                transition: 0.2s ease all;
                            }

                            &:hover::after {
                                width: 100%;
                            }
                        }
                    }

                    &.active {
                        display: block;
                        transform: translateX(0%);
                    }

                    /!*
                        li:last-of-type{
                        background-color: #4B4C4C;
                        border-top-right-radius: initial;
                    }*!/
                }

                i {
                    flex: 2;
                    display: flex;
                    justify-content: flex-end;
                    align-self: center;
                    z-index: 100000000;
                    color: ${theme.colors.primary};
                    padding: 1rem;
                }
            }

            // DROP DOWMN *************************!/
            & .navli:hover .dropdown-content {
                display: block;
            }

            .dropdown-content {
                display: none;
                position: absolute;
                background-color: ${theme.colors.white};
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 1.2rem 1.6rem;
                margin-top: .3rem;
                z-index: 1;
                min-width: 16rem;

                & > a {
                    display: block;
                    padding-top: 1rem;
                    margin-bottom: 1rem;
                    white-space: nowrap;
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
        }

        ${theme.mq('tablet-landscape')} {

            .amics {
                background-color: #4B4C4C!important;
                border-top-right-radius: 25px;
            }

            .normal:not(:last-child):after {
                position: absolute;
                right: 0;
                vertical-align: 50%;
                font-size: 25px;
                content: '/';
                color:#D8D8D8;
            }

            .containers {

                .navbar {

                    ul.nav-links {

                        flex: 4;
                        display: flex;
                        //justify-content: space-evenly;
                        text-align:center;
                        margin-bottom: 0;
                        transform: translateX(0);
                        flex-direction: row;
                        height: auto;
                        position: initial;
                        background:transparent;

                        li {
                            flex:1;
                            margin: 0;
                            list-style-type: none;
                            position:relative;
/!*
                            &:not(:last-child):after{
                                position: absolute;
                                right: 0;
                                vertical-align: 50%;
                                font-size: 25px;
                                content: '/';
                                color:#D8D8D8;
                            }*!/

                            a {
                                color: ${theme.colors.menu_text};
                                text-decoration: none;
                                font-weight: 500;
                                font-size: ${theme.font.small};
                                position: relative;

                                &::after {
                                    position: absolute;
                                    content: '';
                                    background-color: ${theme.colors.primary};
                                    bottom: -5px;
                                    left: 0;
                                    width: 0;
                                    height: 3px;
                                    transition: 0.3s ease all;
                                }

                                &:hover::after {
                                    width: 100%;
                                }
                            }
                        }

                        &.active {
                            display: flex;
                            transform: translateX(0%);
                        }
                    }

                    i {
                        display: none;
                    }
                }
            }
        }

        .label {

        }*/
         /*        .label::before{
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    padding:1rem 0;
                    background-color: red;
                    border:1px solid black;
                    overflow: hidden;
                    z-index: -1;

                }*/
    `;

    return [style];
}
