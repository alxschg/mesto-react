import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [imageName, setName] = React.useState("");
  const [imageLink, setLink] = React.useState("");

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeLink(event) {
    const text = event.target.value;
    setLink(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      imageName,
      imageLink,
    });
  }

  return (
    <PopupWithForm
      name="create-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="imageName"
        id="imageName"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        className="popup__input popup__input_type_name"
        onChange={handleChangeName}
      />
      <span id="imageName-error" className="popup__input-error"></span>

      <input
        name="imageLink"
        id="imageLink"
        type="url"
        placeholder="Ссылка на картинку"
        required
        className="popup__input popup__input_type_job"
        onChange={handleChangeLink}
      />
      <span id="imageLink-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
