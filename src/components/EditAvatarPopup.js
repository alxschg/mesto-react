import PopupWithForm from "./PopupWithForm";
import {useRef} from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }

    return (
    <PopupWithForm
      name="avatar-popup"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        name="avatarLink"
        id="avatarLink"
        type="url"
        placeholder="Ссылка на аватарку"
        required
        className="popup__input"
      />
      <span id="avatarLink-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
