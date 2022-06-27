// @ts-nocheck
import React from 'react'

export const Modal = ({
  modalOpen,
  setModalOpen,
  content,
  customBackStyle,
  customModalStyle,
  customCloseStyle
}) => {
  const backStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    zIndex: '2',
    overflow: 'hidden'
  }

  const modalStyle = {
    border: '1px solid black',
    backgroundColor: 'white',
    fontSize: '15px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '50%',
    maxWidth: '800px',
    minHeight: '30%',
    zIndex: '10',
    textAlign: 'center',
    padding: '50px',
    overflow: 'auto'
  }

  const closeStyle = {
    position: 'absolute',
    top: '-25px',
    right: '10px',
    fontWeight: '100',
    color: 'black',
    padding: '15px',
    cursor: 'pointer',
    fontSize: '1.5em'
  }

  const handleClick = () => {
    setModalOpen(false)
  }

  const dynamicBackStyle = {
    ...backStyle,
    ...{ display: modalOpen ? 'block' : 'none' }
  }
  const customBack = { ...dynamicBackStyle, ...customBackStyle }
  const customModal = { ...modalStyle, ...customModalStyle }
  const customClose = { ...closeStyle, ...customCloseStyle }

  return (
    <div className='backModal' style={customBack} onClick={handleClick}>
      <div className='modal' style={customModal}>
        <p className='close' style={customClose} onClick={handleClick}>
          x
        </p>
        {content}
      </div>
    </div>
  )
}
