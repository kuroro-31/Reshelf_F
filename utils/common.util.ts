import { UserFind } from '@/apis'
import { User } from '@/types'

export const isUserSignIn = async () => {
  try {
    const user: User | null = await UserFind()
    console.log(user)

    if (user === null) {
      return false
    } else {
      return true
    }
  } catch {
    return false
  }
}

export const UserSignInCheckAndRedirect = async (
  $nuxt: any,
  redirectPath: string
) => {
  const user: User | null = await UserFind()
  if (user === null) {
    $nuxt.$emit('warningSnackbar', 'ログインしてから実行してください')
    $nuxt.$router.push({ path: redirectPath })
  }
}
