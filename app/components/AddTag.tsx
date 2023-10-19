'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Center, Form, Input } from '@/styled'
import Modal from './Modal'
import { addTag } from '@/api'

export default function AddTag() {
  const [showModal, setShowModal] = useState(false)
  const [tag, setTag] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (tag === '' || tag.length < 2) {
      return
    }

    const res = await addTag({
      name: tag
    })

    if (res) {
      setTag('')
      setShowModal(false)
      router.refresh()
    }
  }

  return (
    <Center>
      <Button type="button" onClick={() => setShowModal(true)}>
        Add Tag
      </Button>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Form onSubmit={handleSubmit}>
            <Input
              required
              type="text"
              onChange={(e) => {
                setTag(e.target.value)
              }}
              value={tag}
            />
            <Button type="submit">Add New Tag</Button>
          </Form>
        </Modal>
      )}
    </Center>
  )
}
