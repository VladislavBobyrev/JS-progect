let url = new URL('https://javascript.info/url')

const protocol = url.protocol
const patsName = url.pathname
const host = url.host
console.log(`${protocol}${host}${patsName}`)
