fetch("http://localhost:3000/").then(async res => {
    console.log("Got response. Reading...")
    const reader = res.body.getReader()
    const td = new TextDecoder()

    let done = false
    while (!done) {
        await reader.read().then(result => {
            console.log(td.decode(result.value))
            done = result.done
        })
    }
    console.log("  > done")
})