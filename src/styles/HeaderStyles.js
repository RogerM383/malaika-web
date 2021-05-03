import {css} from '@emotion/react';

export const header_styles = (theme) => {
    const style = css`
        > div {
            height: 600px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-size: cover;
            background-repeat: no-repeat;


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

              font-size: 80px;
              padding: 4rem;

            }

            .row_menu {

                margin-right: 15rem;
              height: 100px;
            }
        }


    `;

    return [style];
}
