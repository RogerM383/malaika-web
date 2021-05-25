import {css} from '@emotion/react';

export const menu_styles = (theme) => {
    const style = css`

        width: 85%;

        .img_sticky {
            filter: invert(50%);
            display:block
        }

        .img_no_sticky {
            display:none
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

                    /*      
                        li:last-of-type{
                        background-color: #4B4C4C;
                        border-top-right-radius: initial;
                    }*/
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
/*
                            &:not(:last-child):after{
                                position: absolute;
                                right: 0;
                                vertical-align: 50%;
                                font-size: 25px;
                                content: '/';
                                color:#D8D8D8;
                            }*/

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

        }
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
