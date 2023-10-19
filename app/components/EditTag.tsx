'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineEdit } from 'react-icons/ai'

import { editTag } from '@/api'
import { Tag } from '@/types'
import Modal from './Modal'
import { Button, Form, Input } from '@/styled'

export default function EditTag({ tag }: { tag: Tag }) {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState(tag.name)
  const router = useRouter()

  const editTagHandler = async () => {
    setShowModal(true)
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (name === '' || name.length < 2) {
      return
    }

    const res = await editTag({
      ...tag,
      name
    })

    if (res) {
      setShowModal(false)
      router.refresh()
    }
  }

  return (
    <>
      <AiOutlineEdit onClick={editTagHandler} />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Form onSubmit={handleSubmit}>
            <Input
              required
              type="text"
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
            />
            <Button type="submit">Edit Tag</Button>
          </Form>
        </Modal>
      )}
    </>
  )
}
