export default function ({ route, app, redirect }) {
  const arr = app.i18n.locales.filter((item) => {
    return route.fullPath.indexOf(`/${item.code}`) === 0
  })

  if (!arr.length) {
    redirect(`/${app.i18n.locale}${route.fullPath}`)
  }
}
