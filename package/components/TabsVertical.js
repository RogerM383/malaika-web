import React, { Fragment } from "react";

const Tab = () => {
	return null;
};

const Head = () => {
	return null;
};

class Tabs extends React.Component {
	 static Tab = Tab;

	constructor(props) {
		super(props);
		this.state = {
			tab: props.tabactive ? parseInt(props.tabactive) :0,
		};
		this.width = props.width ? props.width : "";
	}

	handleMenuClick = (index) => {
		this.setState({ tab: index });
	};

	render () {
		const { title,icon = false } = this.props;

		const children = React.Children.toArray(this.props.children);

		const tabs = children.filter((child) => child.type === Tab);

		const buttonsMenu = tabs.map((tab, index) => {
			const key = "button_" + index;
			return (
				<div key={key} className={`column tabs-button${this.state.tab === index ? " selected" : ""}`} onClick={() => this.setState({ tab: index })}>
					{tab.props.icon} <span>{tab.props.title}</span>
				</div>
			);
		});

		const content = tabs.map((tab, index) => {
			const key = "tab_" + index;
			return (
				<>
				{
					this.state.tab === index &&
					tab.props.children
				}
				</>
			);
		});

		return (
      		<div {...this.props}>
          		<div className="main-title">{title}</div>
        		<div className="row">
					<div className="row column buttons">{buttonsMenu}</div>
					<div className="column main-content">{content}</div>
				</div>
			</div>
		);
	}
}

export default Tabs;
