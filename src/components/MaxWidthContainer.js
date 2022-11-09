import React from "react";
import {css} from '@emotion/react';

const container = (theme) => {
    const style = css`
        max-width: ${theme.container.max_width};
        padding: 0 2rem;
        margin: auto;

        ${theme.mq('tablet-landscape')} {
            padding: 0 ${theme.container.horizontal_padding};
        }
    `;
    return [style];
};

const MaxWidthContainer = ({className, children, ...props}) => {
    return (
        <div className={className} css={container}>
            {children}
        </div>
    );
}

export default MaxWidthContainer;
