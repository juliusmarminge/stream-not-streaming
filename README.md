# stream-not-streaming

- `node server.js` in one terminal
- `node test.js` in another

server calls `reply.send(stream)` immediately, but the test script
does not acknowledge the response until 5s later when
`controller.close()` is called.

Adding a `controller.enqueue("ack??")` in `ReadableStream.start`
makes the test script acknowledge the response immediately. Why?