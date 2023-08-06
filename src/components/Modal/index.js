import React from "react";
import { createPortal } from 'react-dom';
import "./Modal.css";

function Modal({ children }) {
    return createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal") // como segundo valor a createPortal se envia la ubicacion donde queremos añadir el elemento
    );
}

export { Modal };

