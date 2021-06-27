export default async function ({ route, redirect }) {
  const ok = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const ok = [
            'Habari',
            'Hoi',
            'Yassou',
            'Cześć, Witaj',
            'selam',
            'hai',
            'helo',
            'halo',
            'hej',
        ].includes(route.params.hello)

        if (!ok) {
            resolve(false)
        } else {
            resolve(true)
        }
      }, 2000)
  })

  if (!ok) {
    return redirect('/error/404')
  }
}
