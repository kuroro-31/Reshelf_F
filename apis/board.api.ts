import {
  Board,
  BoardCreateRequest,
  BoardCreateResponse,
  BoardFetchResponse,
  BoardFindResponse,
} from '@/types'
import axios from 'axios'

export const BoardCreate = async (params: BoardCreateRequest) => {
  axios.defaults.withCredentials = true

  let created: boolean = false
  await axios.get('/sanctum/csrf-cookie').then(async (response) => {
    await axios
      .post('/api/board/create', params)
      .then((response: BoardCreateResponse) => {
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

export const BoardFetch = async () => {
  axios.defaults.withCredentials = true

  let boards: Array<Board> | null = null
  await axios
    .get('/api/board/fetch')
    .then((response: BoardFetchResponse) => {
      if (response.status === 200) {
        boards = response.data.message.boards
      }
    })
    .catch((error: any) => {
      console.log(error)
    })

  return boards
}

export const BoardFind = async (boardId: number) => {
  axios.defaults.withCredentials = true

  let board: Board | null = null
  await axios
    .get('/api/board/find', { params: { id: boardId } })
    .then((response: BoardFindResponse) => {
      if (response.status === 200) {
        board = response.data.message.board
      }
    })
    .catch((error: any) => {
      console.log(error)
    })

  return board
}
