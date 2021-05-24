import {css} from '@emotion/react';

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
                 /*     max-width: 20px;
                      max-height: 20px;*/
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
