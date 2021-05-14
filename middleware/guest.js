//ログインしているかチェックを行い、ログインしてる場合はリダイレクトする
export default ({ store, redirect }) => {
  if (!store.getters['auth/check']) {
    return redirect('/auth/login')
  }
}
