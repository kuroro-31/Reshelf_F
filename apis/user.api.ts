import { User, UserCreateRequest, UserCreateResponse } from '@/types'
import axios from 'axios'

export const UserCreate = async (params: UserCreateRequest) => {
  axios.defaults.withCredentials = true

  let created = false
  await axios.get('/sanctum/csrf-cookie').then(async () => {
    await axios
      .post('/api/register', params)
      .then((response: UserCreateResponse) => {
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

export const UserFind = () => {
  axios.defaults.withCredentials = true

  let user: User | null = null

  axios
    .get('/api/user')
    .then((response) => {
      if (response.status === 200) {
        user = response.data
      }
    })
    .catch((error: any) => {
      console.log(error)
      return null
    })

  return user
}
