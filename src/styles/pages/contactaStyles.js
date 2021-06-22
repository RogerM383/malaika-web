import {css} from '@emotion/react';

export const contacta_styles = (theme) => {
    const style = css`


        input[type="text"] {
            border: 1px solid ${theme.colors.light_gray};
            display: block;
            width: 100%;
        }

        button {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        textarea {
            border: 1px solid ${theme.colors.light_gray};
            padding: 1rem;
            width: 100%;
        }



      .title_block {

        font-family: ${theme.font.didot};
        font-size: ${theme.font.h3};
        padding-bottom: ${theme.container.vertical_padding};
      }



        .block1 {
            padding: 2rem 0;

          .ant-col img {

                filter: invert(100%);
                padding-right: 0.5rem;
            }

        }

        .block2 {
            width: 100%;
            // margin: 0 auto;
            /*     padding-left: 0;
                 padding-right: 0;*/
            padding-bottom: ${theme.container.vertical_padding};

            .card_form {
                box-shadow: 0 6.2px 27.3px rgba(0, 0, 0, 0.19),
                0 15.4px 39px rgba(0, 0, 0, 0.108),
                0 100px 76px rgba(0, 0, 0, -0.014);

                padding: 2rem;

                .label {
                    margin-bottom: 0.5rem;
                }
            }

        }


        ${theme.mq('tablet-landscape')} {
            // margin: 0 auto;
            padding-bottom: ${theme.container.vertical_padding};

            .block2 {
                width: 50%;
                /*            padding-left: 20%;
                            padding-right: 20%;*/
            }
        }


    `;

    return [style];
}



