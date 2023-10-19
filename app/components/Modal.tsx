import { Modal as StyledModal, ModalContent, ModalClose } from '@/styled'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type ModalT = {
  setShowModal: (value: boolean) => void
  children: React.ReactNode
}

export default function Modal({ setShowModal, children }: ModalT) {
  return (
    <StyledModal>
      <ModalContent>
        <ModalClose onClick={() => setShowModal(false)}><AiOutlineClose /></ModalClose>
        {children}
      </ModalContent>
    </StyledModal>
  )
}
