import React, { useState, useEffect } from 'react'

// styles
import { StyledModal } from './Modal.styles'

const Modal = ({ children, show }) => {

  const [showModal, setShowModal] = useState(false);

  // handle selectedCards and winnerCards on selectedCards change
  useEffect(() => {
    setShowModal(show)
  }, [show]);

  return (
    showModal && (
      <StyledModal>
        <div className="modal">
          <button className="btn--close" onClick={() => setShowModal(false)}>x</button>
          {children}
        </div>
      </StyledModal>
    )
    
  )
}

export default Modal