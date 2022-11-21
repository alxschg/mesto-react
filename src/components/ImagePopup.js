import React from 'react';

function ImagePopup(props) {
        return (
            <div id="image-card" className={`popup popup_overlay ${props.card ? `popup_is-opened`: ""}`}>
                <div className="popup__image-container">
                    <figure className="popup__image-box">
                        <img className="popup__image" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""}/>
                        <figcaption className="popup__image-text">{props.card ? props.card.name : ""}</figcaption>
                    </figure>
                <button type="button" className="popup__close  popup__close_image" aria-label="Закрыть" onClick={props.onClose}></button>
                </div>
            </div>
        );
}

export default ImagePopup;