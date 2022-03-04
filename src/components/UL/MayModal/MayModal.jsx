import React from 'react';
import cl from "./MayModal.module.css"

const MayModal = ({ children, visivle, setVisible }) => {

    const rootClasses = [cl.myModal]

    if (visivle === true) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <button className={cl.buttomCloseModal} onClick={() => setVisible(false)}>x
                </button>
                    {children}
            </div>
        </div>
    );
}

export default MayModal;
