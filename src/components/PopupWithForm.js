import React from 'react';

function PopupWithForm(props) {
        return (
            <div id={props.name} className={`popup ${props.isOpen ? `popup_is-opened`: ""}`}>
                <div className="popup__form">
                    <h2 className="popup__title">{props.title}</h2>
                    <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose}></button>
                    <form name={props.name} noValidate className="form">
                        <fieldset className="popup__fieldset">
                            {props.children}
                            <button type="submit" className="popup__button-save" aria-label="Создать">{props.buttonText}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
}

export default PopupWithForm;