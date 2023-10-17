import React from "react";

export default function Popup({children, isOpen, onClose}) {
  const classPopupIsOpen = `popup ${isOpen ? 'popup_opened': ''}`;

  return (
    <div className={classPopupIsOpen}>
      <div className='popup__container'>
        <button className="popup__close-button button close-popup"
                type="button"
                aria-label="Закрыть"
                onClick={onClose}>
        </button>
        {children}
      </div>
    </div>
  );
}