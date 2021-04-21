import React, {useEffect, useState} from "react";
import theme from "../../src/styles/themes/DefaultTheme"

import {
    gradient_circle,
    circle1_loader,
    diamond_loader,
    page_gradient_circle
} from "../styles/LoaderStyles";


const Loader = ({type = 'GradientCircle', ...props}) => {

    const [element, setElement] = useState(null);

    useEffect(() => {
        setElement(React.createElement(loaders[type]));
    }, []);

    return (
        element && element
    );
};

export default Loader;


const PageGradientCircle = (props) => {

    const primary = theme.colors.primary;
    const white = theme.colors.white;

    return (
        <div className={'loader'} css={page_gradient_circle}>
            <svg className="spinner-box" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="33%" stopColor={white} stopOpacity="0%"/>
                        <stop offset="100%" stopColor={primary} stopOpacity="100%"/>
                    </linearGradient>
                    <mask id="myMask">
                        <circle cx="25" cy="25" r="23" fill="white"/>
                        <circle cx="25" cy="25" r="20" fill="black"/>
                    </mask>
                </defs>
                <circle className={'circle-border'} cx="25" cy="25" r="25" fill="url(#grad1)" mask="url(#myMask)"/>
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    );
};

const GradientCircle = (props) => {

    const primary = theme.colors.primary;
    const white = theme.colors.white;

    return (
        <div className={'loader'} css={gradient_circle}>
            <svg className="spinner-box" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="33%" stopColor={white} stopOpacity="0%"/>
                        <stop offset="100%" stopColor={primary} stopOpacity="100%"/>
                    </linearGradient>
                    <mask id="myMask">
                        <circle cx="25" cy="25" r="23" fill="white"/>
                        <circle cx="25" cy="25" r="20" fill="black"/>
                    </mask>
                </defs>
                <circle className={'circle-border'} cx="25" cy="25" r="25" fill="url(#grad1)" mask="url(#myMask)"/>
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    );
};

const Circle1 = (props) => {
    return (<div className="loader" css={circle1_loader}>Loading...</div>);
};

const Diamond = (props) => {
    return (
        <div css={diamond_loader}>
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"/>
                <div className="sk-cube2 sk-cube"/>
                <div className="sk-cube4 sk-cube"/>
                <div className="sk-cube3 sk-cube"/>
            </div>
        </div>
    );
};

const loaders = {
    PageGradientCircle,
    GradientCircle,
    Circle1,
    Diamond
}
