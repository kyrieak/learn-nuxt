export default async function ({ $axios, route, redirect }) {
    try {
        const {data} = await $axios.get('/api/hellos/')

        if (!data.includes(route.params.hello)) {
            throw new Error(route.params.hello + 'not found')
        }
    } catch(e) {
        return redirect('/error/404')
    }
}
