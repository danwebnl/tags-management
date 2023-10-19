'use client'

import { Message, Center, Button } from './styled'

export default function error({ error, reset }) {
  return (
    <div>
      <Message error>There has been an error! {error.message}</Message>
      <Center style={{ marginTop: '20px' }}>
        <Button onClick={reset}>Maybe try again?</Button>
      </Center>
    </div>
  )
}
