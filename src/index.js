// @ts-nocheck
import React from 'react'
import style from './styles.module.css';

export const Modal = ({modalOpen, setModalOpen, content}) => {

  const handleClick = () => {
    setModalOpen(false);
  }

  return (
    <div className={style.backModal} 
      style={{ display: modalOpen ? "block":"none" }} 
      onClick={handleClick}
    >
      <div className={style.modal}>
          <p className={style.close} onClick={handleClick}>
            x
          </p>
          {content}
      </div>
    </div>
  )
};