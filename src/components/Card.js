import React from 'react';

function Card(props){
        function handleClick() {
            props.onCardClick(props.card);
        }
        return (
            <li className="element">
                        <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
                        <div className="element__group">
                            <h2 className="element__title">{props.card.name}</h2>
                            <div className="element__group-like">
                                <button type="button" className="element__like" aria-label="Лайк"></button>
                                <span className="element__like-quantity"></span>
                            </div>
                        </div>
                        <button type="button" className="element__delete" aria-label="Удалить"></button>
                    </li>
        );
    }

export default Card;