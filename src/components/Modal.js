import '../styles/modal.css'

const Modal = ({ children }) => {
  return (
    <div id="modal-bg">
      {children}
    </div>
  )
}

export default Modal