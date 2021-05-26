import {css} from '@emotion/react';

export const header_styles = (theme) => {
    const style = css`
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
            
        .header-max-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          
            .content {
                position: relative;
                margin-top: ${theme.header.padding_vertical};
                padding: 0 ${theme.header.padding_horizontal};
                height: 100vh;
                
                .logo {
                    display: block;
                    img {
                        max-width: 10rem;
                    }
                }
                
                .info {
                    display: flex;
                    flex-direction: column-reverse;
                    align-items: flex-end;
                    position: absolute;
                    width: calc(50% - ${theme.header.padding_horizontal});
                    top: 0;
                    right: ${theme.header.padding_horizontal};
                    
                    .contact  {
                        font-size: ${theme.font.s};
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-end;
                        img {
                            height: .8rem;
                            width: .8rem;
                        }
                        a {
                            margin: 0 .5rem;
                            display: block;
                        }    
                    }
                    
                    .language {
                        font-size: ${theme.font.s};
                        color: white;
                        margin: 0 0 1rem 0;
                    }
                }
                
                .title {
                    font-size: ${theme.font.h1};
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.bold};
                    color: ${theme.colors.white};
                    position: absolute;
                    top: 50vh;
                    width: 5rem;
                }
            }
        }
    `;

    return [style];
}

/*
export const header_styles = (theme) => {
    const style = css`


        > div {
            position: relative;
            height: 100vh;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-size: cover;
            background-repeat: no-repeat;

          .content{
              width: 100%;
            display: flex;
            flex-direction: column;
            //justify-content: space-between;
            height: 100%;

            .row_top {
              flex:0 0 20%;

                img{
                    padding-bottom: 2rem;
                }

              display: flex;
              flex-wrap: wrap;
              padding: 1rem;
              justify-content: flex-start;
                flex-direction: column;
                @media(min-width: 40rem){
                flex-direction: row;

                }
            }

              .contact_language{

                flex:1 1 auto;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;


                .contact{
                  display: flex;
                  margin-right: 5rem;
                    :first-of-type{
                        white-space: nowrap;
                    }
                  > img{
                    display: block;
                    margin:0 2rem;
                 /!*     max-width: 20px;
                      max-height: 20px;*!/
                  }
                    a{
                        color:white
                    }
                }
                  .language{
                      display: flex;

                      align-items: flex-start;
                  }

              }
            }

            .row_middle {
                flex:0 0 80%;
                align-self: center;
                align-items: center;
                padding: 4rem;

            }

            .row_menu {

                margin-right: 15rem;
                 height: 100px;
            }
        }


        ${theme.mq('mobile-landscape')} {
            > div {

                height: 100vh;
            }
        }


    `;

    return [style];
}
*/
