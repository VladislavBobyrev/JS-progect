let xml = new XMLHttpRequestUpload()
// асинхр звпрос
xml.open('GET', '/article/xmlhttprequest/example/load')
// синхр запрос
xml.open('GET', '/article/xmlhttprequest/example/load', false)
xml.send()

// отмена запроса
xml.abort()

