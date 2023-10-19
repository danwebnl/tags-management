'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineDelete } from 'react-icons/ai'

import { Button, Center, ButtonsWrapper } from '@/styled'
import { deleteTag } from '@/api'
import Modal from './Modal'

export default function DeleteTag({ id }: { id: string }) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const deleteTagHandler = async () => {
    await deleteTag(id)
    router.refresh()
    setShowModal(false)
  }

  return (
    <>
      <AiOutlineDelete onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Center>
            <p>Are you sure you want to delete this tag?</p>
          </Center>
          <ButtonsWrapper>
            <Button onClick={() => setShowModal(false)} secondary>
              No
            </Button>
            <Button onClick={deleteTagHandler}>Yes</Button>
          </ButtonsWrapper>
        </Modal>
      )}
    </>
  )
}
