import {css} from '@emotion/react';

export const header_styles = (theme) => {
    const style = css`
        > div {
            height: 800px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-size: cover;
            background-repeat: no-repeat;

          .content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            div:first-of-type{
            flex:0 0 20%;
          }

            div:nth-of-type(2){
              flex:0 0 80%;
              align-self: center;
              align-items: center;
            }
          }



            .row_top {
              display: flex;
              flex-wrap: wrap;
              padding: 4rem;
              justify-content: space-between;

              .contact_language{
                flex:1 1 auto;
                display: flex;
                justify-content: flex-end;
                align-items: center;


                .contact{
                  display: flex;
                  margin-right: 5rem;
                    :first-of-type{
                        white-space: nowrap;
                    }
                  > img{
                    display: block;
                    margin:0 2rem;
                      max-width: 20px;
                      max-height: 20px;
                  }
                    a{
                        color:white
                    }
                }



              }
            }

            .row_middle {
              font-size: 50px;
              padding: 4rem;


                @media(min-width: 40.0rem ){
                    font-size: 80px;

                }

            }

            .row_menu {

                margin-right: 15rem;
                 height: 100px;
            }
        }


    `;

    return [style];
}
