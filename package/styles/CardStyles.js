import { css, jsx } from "@emotion/react";


export const main = (theme) => {
    const style = css`

        padding: 1rem;



		& .children {
			padding: 1%;
			width: 100%;

			div {
				width: 100%;
				overflow: hidden;
				display: inline-block;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}


	`;
    return [style];
};


