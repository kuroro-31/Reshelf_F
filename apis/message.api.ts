import {
  Message,
  MessageCreateRequest,
  MessageCreateResponse,
  MessageFetchResponse,
} from '@/types'
import axios from 'axios'

export const MessageCreate = async (params: MessageCreateRequest) => {
  axios.defaults.withCredentials = true

  let created: boolean = false
  await axios.get('/sanctum/csrf-cookie').then(async (response) => {
    await axios
      .post('/api/message/create', params)
      .then((response: MessageCreateResponse) => {
        if (response.status === 200) {
          created = true
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })

  return created
}

export const MessageFetchByBoardId = async (boardId: number) => {
  axios.defaults.withCredentials = true

  let messages: Array<Message> | null = null
  await axios
    .get('/api/message/fetch_by_board_id', { params: { board_id: boardId } })
    .then((response: MessageFetchResponse) => {
      if (response.status === 200) {
        messages = response.data.message.messages
      }
    })
    .catch((error: any) => {
      console.log(error)
    })

  return messages
}
