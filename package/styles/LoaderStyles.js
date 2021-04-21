import {css} from '@emotion/react';

export const circle1_loader = (theme) => {

    const style = css`
        &.loader,
        &.loader:before,
        &.loader:after {
            border-radius: 50%;
        }

        &.loader {
            color: ${theme.colors.primary};
            font-size: 11px;
            text-indent: -99999em;
            margin: 55px auto;
            position: relative;
            width: 10em;
            height: 10em;
            box-shadow: inset 0 0 0 1em;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
        }

        &.loader:before,
        &.loader:after {
            position: absolute;
            content: '';
        }

        &.loader:before {
            width: 5.2em;
            height: 10.2em;
            background: ${theme.colors.white};;
            border-radius: 10.2em 0 0 10.2em;
            top: -0.1em;
            left: -0.1em;
            -webkit-transform-origin: 5.1em 5.1em;
            transform-origin: 5.1em 5.1em;
            -webkit-animation: load2 2s infinite ease 1.5s;
            animation: load2 2s infinite ease 1.5s;
        }

        &.loader:after {
            width: 5.2em;
            height: 10.2em;
            background: white;
            border-radius: 0 10.2em 10.2em 0;
            top: -0.1em;
            left: 4.9em;
            -webkit-transform-origin: 0.1em 5.1em;
            transform-origin: 0.1em 5.1em;
            -webkit-animation: load2 2s infinite ease;
            animation: load2 2s infinite ease;
        }

        @-webkit-keyframes load2 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes load2 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    `;

    return [style];
}

export const diamond_loader = (theme) => {
    const style = css`
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, .5);
        margin-left: auto;
        margin-right: auto;

        .sk-folding-cube {
            margin: 20px auto;
            width: 40px;
            height: 40px;
            position: relative;
            -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
        }

        .sk-folding-cube .sk-cube {
            float: left;
            width: 50%;
            height: 50%;
            position: relative;
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }

        .sk-folding-cube .sk-cube:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.primary};
            -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
            animation: sk-foldCubeAngle 2.4s infinite linear both;
            -webkit-transform-origin: 100% 100%;
            -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
        }

        .sk-folding-cube .sk-cube2 {
            -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
        }

        .sk-folding-cube .sk-cube3 {
            -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
        }

        .sk-folding-cube .sk-cube4 {
            -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
        }

        .sk-folding-cube .sk-cube2:before {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        .sk-folding-cube .sk-cube3:before {
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
        }

        .sk-folding-cube .sk-cube4:before {
            -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
        }

        @-webkit-keyframes sk-foldCubeAngle {
            0%, 10% {
                -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
            }
            25%, 75% {
                -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
            }
            90%, 100% {
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
        }

        @keyframes sk-foldCubeAngle {
            0%, 10% {
                -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
            }
            25%, 75% {
                -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
            }
            90%, 100% {
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
        }
    `;
    return [style];
}

export const page_gradient_circle = (theme) => {

    const style = css`
        @keyframes spin {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(359deg);
            }
        }

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000000;

        &:before {
            content: "";
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: ${theme.colors.white};
            opacity: .9;
            z-index: 900;
        }

        svg {
            position: absolute;
            z-index: 1000;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            circle {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                animation: spin .8s linear 0s infinite;
                transform-origin: 50%;
            }
        }
    `;

    return [style];
}

export const gradient_circle = (theme) => {

    const style = css`
        @keyframes spin {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(359deg);
            }
        }

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: ${theme.colors.white};
            opacity: .9;
            z-index: 900;
        }

        svg {
            position: absolute;
            z-index: 1000;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            circle {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                animation: spin .8s linear 0s infinite;
                transform-origin: 50%;
            }
        }
    `;

    return [style];
}

