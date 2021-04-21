import React, {useState, useRef, useEffect} from "react";


function Accordion({children, ...props}) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {


        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    useEffect(() => {
        setHeightState(
            setActive !== "active" ? "0px" : `${content.current.scrollHeight}px`
        );

    }, [children]);


    return (
        <div {...props}>
            <div className="accordion__section">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <p className="accordion__title">{props.title}</p>
                    <i className={`fas fa-angle-down accordion__icon ${setActive == 'active' ? 'rotate' : ''}`}/>
                </button>
                <div
                    ref={content}
                    style={{maxHeight: `${setHeight}`}}
                    className="accordion__content"
                    // className={`accordion__content  ${setActive == 'active' ? 'ac_active' : 'ac_not_active'}`}
                >
                    <div className="accordion__text">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Accordion;
