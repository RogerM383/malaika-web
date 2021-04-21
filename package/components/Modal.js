import React, {useEffect} from 'react';
import { css } from '@emotion/react';
import {main} from "../styles/ModalStyle"


const Modal = ({modal, setModal, title, children, onclick, btnAction, btnCerrar = null, className, forwardedRef, ...props}) => {

    const handleClose = (e) => {
        e.preventDefault();
        setModal(false);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "OutsideModal") {
            setModal(false);
        }
    };




    return (
        <>
        {
            modal &&
            <div id="OutsideModal" className={className + ' modale opened'} aria-hidden="true" ref={forwardedRef} onClick={handleClickOutside} css={main} {...props}>
                <div className="modal-dialog">

                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="button button-clear" aria-hidden="true" onClick={(e) => handleClose(e)}>&times;</button>
                    </div>

                    <div className="modal-body">
                        {children}
                    </div>

                    <div className="modal-footer">
                        {
                            btnCerrar &&
                            <button onClick={(e) => handleClose(e)} className="btndismis" id="btn_cerrar">Cerrar</button>
                        }
                        {
                            btnAction &&
                            <button onClick={onclick} className="btnok" id="btn_action">{btnAction}</button>
                        }
                    </div>

                </div>
            </div>
        }
        </>
    )
}



export default Modal;
