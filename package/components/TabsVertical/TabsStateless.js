import React, {Fragment, useState} from "react";
import { css } from "@emotion/react";
import Tabs from "../TabsVertical";


import router from "next/router";


const Tabs = ({user,width,...props}) =>{

    const [bindIndex, setBindIndex] = useState(props.defaultIndex);

    const changeItem = itemIndex => {
        if (typeof props.onItemClick === "function") props.onItemClick(itemIndex);
        if (itemIndex !== bindIndex) setBindIndex(itemIndex);
        if(itemIndex === bindIndex) setBindIndex(0)
    };

    const items = props.children.filter(
        item => item.type.name === "AccordionItem"
    );



    const { className, vertical } = this.props;
		const children = React.Children.toArray(this.props.children);
    	const tabs = children.filter((child) => child.type === Tab);



    	const buttonsMenu = tabs.map((tabb, index) => {
			const key = "button_" + index;
			return (
				<div key={key} className={`tabs_button column ${tab === index ? "selected" : ""}`}>
					<div onClick={() => this.setState({ tab: index })}>
						<span>{tabb.props.title}</span><span></span>
					</div>
				</div>
			);
		});



		const content = tabs.map((tab, index) => {
			const key = "tab_" + index;
			return (
				<Fragment>
					{this.state.tab === index && (
						<div key={key} className="container">
							{" "}
							{tab.props.children}{" "}
						</div>
					)}
				</Fragment>
			);
    	});


		return (
			<div css={css} className={className}>

				<div className="tabs_head">
					<div className="row">{buttonsMenu}</div>
				</div>


        		{content}


			</div>
		);

}

export default Tabs;
