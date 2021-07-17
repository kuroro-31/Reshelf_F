export default function ({ store, redirect }) {
  if (!store.state.authenticated) {
    return redirect('/auth/login')
  } else if (store.state.authenticated) {
    console.log('認証済ユーザーです！')
  }
}
