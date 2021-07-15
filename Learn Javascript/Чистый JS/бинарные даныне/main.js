let arr8 = new Uint8Array(4)
// перезаписали в 16 битовый вариант
let arr16 = new Uint16Array(arr8)

console.log(arr8.byteLength)
console.log(arr8.BYTES_PER_ELEMENT)

// ================= DataView
let buffer = new Uint8Array([255, 255, 255, 255]).buffer
console.log(buffer)

let dataView = new DataView(buffer)
console.log( dataView.getUint8(0))
console.log( dataView.getUint16(0))
console.log( dataView.getUint32(0))

// textDecor

let uniti8 = new Uint8Array([72, 121, 108, 108, 111])

console.log(new TextDecoder().decode(uniti8))

// nextEncoder

let encore = new TextEncoder()

let unit16 = encore.encode('Valdislav imperator')
console.log(unit16)

let text = new TextDecoder().decode(unit16)
console.log(text)

// ==================================  Blob
const helloBinar = new Uint8Array([72, 102, 108, 108, 111])
let blob = new Blob([helloBinar, '', 'vladislav'], {type: 'text/plain'})

console.log(blob)