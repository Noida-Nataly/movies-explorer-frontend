import Popup from "../Popup/Popup";
import imageIsOk from '../../images/isOk.svg'
import imageIsOops from '../../images/isOops.svg'

export default function InfoTooltip ({isOpen, onClose, isOk, message}) {
  const linkImage = isOk ? imageIsOk : imageIsOops;
  // const textMessage = isOk ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.';

  function handleClosePopup() {
    onClose(false);
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={handleClosePopup}
    >
      <div className="tooltip">
        <div className="tooltip__image"><img src={linkImage} alt={message}/></div>
        <div className="tooltip__text">{message}</div>
      </div>
    </Popup>
  )
}