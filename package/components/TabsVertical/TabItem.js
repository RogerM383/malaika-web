import React from "react";

function TabItem({...props}) {


    const style = {
        collapsed: {
            display: "none"
        },
        expanded: {
            display: "block"
        },
        buttonStyle: {
            display: "block",
            width: "100%"
        }
    };

    return (
        <div>
            <button style={style.buttonStyle} onClick={() => props.handleClick()}>
               <span css={{float:"left"}}>{props.label}</span>  <span css={{float:"right"}}>{props.isCollapsed ? "+" : "-"}</span>
            </button>
            <div
                className="collapse-content"
                style={props.isCollapsed ? style.collapsed : style.expanded}
                aria-expanded={props.isCollapsed}
            >
                {props.children}
            </div>
        </div>
    );
}

export default AccordionItem;
