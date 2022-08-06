import { useRef } from 'react'

import '../styles/modal.css'

const Modal = ({ setIsModalVisible, children }) => {
  const modalBg = useRef(null)

  const handleModalBgClick = e => {
    if (e.target == modalBg.current) {
      setIsModalVisible(false)
    }
  }

  return (
    <div id="modal-bg" ref={modalBg} onClick={handleModalBgClick}>
      {children}
    </div>
  )
}

export default Modal