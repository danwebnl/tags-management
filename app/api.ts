import { Tag } from './types'

const APIURL = 'https://652db905f9afa8ef4b27c676.mockapi.io'

export const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${APIURL}/tags`, { cache: 'no-store' })
  const tags = await res.json()
  return tags
}

export const addTag = async (tag: { name: string }): Promise<Tag> => {
  const res = await fetch(`${APIURL}/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tag)
  })
  const newTag = await res.json()
  return newTag
}

export const editTag = async (tag: Tag): Promise<Tag> => {
  const res = await fetch(`${APIURL}/tags/${tag.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tag)
  })
  const updatedTag = await res.json()
  return updatedTag
}

export const deleteTag = async (id: string) => {
  await fetch(`${APIURL}/tags/${id}`, {
    method: 'DELETE'
  })
}
