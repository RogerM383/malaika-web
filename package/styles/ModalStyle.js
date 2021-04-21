import { css } from '@emotion/react';


export const main = (theme) => {
    const style = css`

      background-color: red;

      &:before {
          content: "";
          display: none;
          background: rgba(0, 0, 0, 0.6);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
      }

      &.opened:before {
          display: block;
      }
      &.opened .modal-dialog {
          -webkit-transform: translate(0, 0);
          -ms-transform: translate(0, 0);
          transform: translate(0, 0);
          top: 20%;
      }
      & .modal-dialog {
          background: #fefefe;
          border: #333333 solid 0px;
          border-radius: 5px;
          margin-left: -200px;
          text-align:center;
          position: fixed;
          left: 50%;
          top: -100%;
          z-index: 11;
          width: 360px;
          box-shadow:0 5px 10px rgba(0,0,0,0.3);
          -webkit-transform: translate(0, -500%);
          -ms-transform: translate(0, -500%);
          transform: translate(0, -500%);
          -webkit-transition: -webkit-transform 0.3s ease-out;
          -moz-transition: -moz-transform 0.3s ease-out;
          -o-transition: -o-transform 0.3s ease-out;
          transition: transform 0.3s ease-out;
      }
      & .modal-body {
          padding: 20px;
          overflow: auto;
      }

      & .modal-header,
      & .modal-footer {
          padding: 10px 20px;
      }
      & .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: #eeeeee solid 1px;
      }
      & .modal-header h2 {
          font-size: 20px;
      }
  `;

    return [style];
}

/*

export const modalUserAccount= (theme) => {
    const style = css`

        &#OutsideModal {
            &:before {
                content: "";
                display: none;
                background: rgba(0, 0, 0, 0.6);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10;
            }
            &.opened:before {
                display: block;
            }
            &.opened .modal-dialog {
                -webkit-transform: translate(0, 0);
                -ms-transform: translate(0, 0);
                transform: translate(0, 0);
                top: 0;
                opacity: 1;
            }
            .modal-dialog {
                background-color: ${theme.colors.white};
                position: fixed;
                top: 100%;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 1000;
                padding: 0 2rem 2rem;
                opacity: 0;

                -webkit-transform: translate(0, 500%);
                -ms-transform: translate(0, 500%);
                transform: translate(0, 500%);
                -webkit-transition: -webkit-transform 1s ease-out;
                -moz-transition: -moz-transform 1s ease-out;
                -o-transition: -o-transform 1s ease-out;
                transition: all 1s ease-out;

                .modal-header {
                    border-bottom: 1px solid ${theme.colors.bright_gray};
                    height: 6rem;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: 0;
                    padding: 0 2rem;
                    background-color: ${theme.colors.white};

                    h2 {
                        font-size: 2rem;
                        margin-bottom: 0;
                    }
                    button {
                        font-size: 2rem;
                        /!*position: absolute;*!/
                        top: 2rem;
                        right: 2rem;
                        padding: 0;
                        margin: 0;
                        line-height: 2.5rem;
                        height: auto;
                        color: ${theme.colors.dark_gray};
                    }
                }
                .modal-body {
                    padding: 3rem 0;
                    height: auto;
                    overflow-y: auto;
                    position: relative;
                    top: 6rem;
                    color: ${theme.colors.dark_gray};
                    form {
                        margin-bottom: 0;
                        div {
                            margin-top: 2rem;
                        }
                    }
                }
                .modal-footer {
                    button {
                        &#btn_action {

                        }
                        &#btn_cerrar {

                        }
                    }
                }
            }
        }

        ${theme.mq('mobile-landscape')} {

        }

        ${theme.mq('tablet-portrait')} {

            &#OutsideModal {
                &:before {

                }
                &.opened:before {

                }
                &.opened .modal-dialog {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .modal-dialog {

                    position: fixed;
                    top: -100%;
                    left: 50%;
                    bottom: auto;
                   //right: auto;
                    max-height: 100%;
                    max-width: 100%;
                    min-width: 30rem;
                    border-radius: 12px;
                    overflow: hidden;
                    padding: 0;

                    .modal-header {
                        position: relative;
                        background-color: ${theme.colors.primary};
                        color: ${theme.colors.white};
                        h2 {

                        }
                        button {
                            color: ${theme.colors.white};
                        }
                    }
                    .modal-body {
                        overflow: auto;
                        max-height: calc(100vh - 72px);
                        top: 0;
                        padding: 2rem 2rem 2rem;
                        form {
                            div {

                            }
                        }
                    }
                    .modal-footer {
                        button {
                            &#btn_action {

                            }
                            &#btn_cerrar {

                            }
                        }
                    }
                }
            }


        }

    `;

    return [style];
}*/
