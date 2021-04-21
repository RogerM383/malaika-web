import React, { Fragment } from "react";
import { css } from "@emotion/react";



import router from "next/router";


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
			tab: 0,

		};
		this.width = props.width ? props.width : "";
		this.user = props.user;
	}

	handleMenuClick = (index) => {
		this.setState({ tab: index });
	};

	render () {
		const { className, vertical } = this.props;
		const children = React.Children.toArray(this.props.children);
    	const tabs = children.filter((child) => child.type === Tab);

    	const buttonsMenu = tabs.map((tab, index) => {
			const key = "button_" + index;
			return (
				<div key={key} className={`tabs_button column ${this.state.tab === index ? "selected" : ""}`}>
					<div onClick={() => this.setState({ tab: index })}>
						<span>{tab.props.title}</span><span></span>
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

		const buttonsNavigation = (
			<div className={`nav_buttons${this.state.tab > 0 && this.state.tab < tabs.length-1 ? ' multiple' : this.state.tab === tabs.length-1 ? ' last' : ''}`}>
			{
				this.state.tab === 0 && !this.user?.id &&
				<button className="navigation_buton" onClick={() => router.push('/login')}>TRAMITAR PEDIDO</button>
			}
			{
				this.state.tab === 0 && this.user?.id &&
				<button className="navigation_buton" onClick={() => this.setState({ tab: this.state.tab+1 })}>Siguiente</button>
			}
			{
				this.state.tab > 0 && this.state.tab < tabs.length-1 &&
				<>
					<button className="navigation_buton" onClick={() => this.setState({ tab: this.state.tab-1 })}>Atrás</button>
					<button className="navigation_buton" onClick={() => this.setState({ tab: this.state.tab+1 })}>Siguiente</button>
				</>
			}
			{
				this.state.tab === tabs.length-1 &&
				<button className="navigation_buton" onClick={() => this.setState({ tab: this.state.tab-1 })}>Atrás</button>
			}
			</div>
		);

		return (
			<div{...this.props} className={className}>

				<div className="tabs_head">
					<div className="row">{buttonsMenu}</div>
				</div>


				{/*	<button className="navigation_buton seguir" onClick={() =>  router.push(`/`)}>Seguir comprando</button>*/}


        		{content}

                <div className={"navigation"}>
                    {buttonsNavigation}
                </div>

			</div>
		);
	}
}

export default Tabs;

/*
    <div className="row" css={tabs_button}>
        {
            tabs.map( (tab, index) => {
                const {title} = tab.props;
                const key = 'tab_'+index;
                return (
                    <div key={key} className="row">
                        <div className="column">
                            <a>{title}</a>
                        </div>
                    </div>
                );
            })
        }
    </div>

    <div className="row">
                {
                    tabs.map( (tab, index) => {
                        const key = 'button_'+index;
                        return (
                            <div key={key} className={`column ${this.state.tab === index ? "selected" : ""}`} css={tabs_button}>
                                <a onClick={ () => this.setState({ tab: index }) } >
                                    {tab.props.title}
                                </a>
                                <hr/>
                            </div>
                        )
                    })
                }
                </div>

                {
                    heads.map( (head, index) => {
                        const key = 'head_'+index;
                        return (
                            <>
                                {
                                    <div key={key} className={`column ${this.state.tab === index ? "selected" : ""}`} css={tabs_button}>
                                        <a onClick={ () => this.setState({ tab: index }) } >
                                            {head.props.children}
                                        </a>
                                        <hr/>
                                    </div>
                                }
                            </>
                        )
                    })
                }
*/
