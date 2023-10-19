import { Table } from '@/styled'
import { Tag } from '@/types'
import { getTags } from '@/api'
import DeleteTag from './DeleteTag'
import EditTag from './EditTag'

export default async function TagsList() {
  const tags = await getTags()

  return (
    <div>
      {tags && tags.length > 0 ? (
        <Table>
          <tbody>
            {tags.map((tag: Tag) => (
              <tr key={tag.id}>
                <td>{tag.name}</td>
                <td>
                  <EditTag tag={tag} />
                </td>
                <td>
                  <DeleteTag id={tag.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  )
}
