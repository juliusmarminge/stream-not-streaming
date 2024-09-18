import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get("/", (req,reply) => {
    const stream = new ReadableStream({
        async start(controller) {
            await new Promise(resolve => setTimeout(resolve, 5000))
            controller.close()
        }
    })

    req.log.debug("sending stream")
    return reply.send(stream)
})

app.listen({ port: 3000 }, (err, addr) => {
    if (err) {
        throw err
    }
    console.log(`server listening on ${addr}`)
})