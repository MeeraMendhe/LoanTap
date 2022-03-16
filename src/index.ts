import { generateInput } from './inputs'
import { processCardEvents } from './processCardEvents'

const start = process.hrtime()
const events = generateInput(1000000)

const result = processCardEvents(events) // <--- We're implementing this guy!

const [seconds, nanoseconds] = process.hrtime(start)
const milliseconds = Math.round(nanoseconds / 1e6)

console.log('output:\t', result)
console.log('========================')
console.log('n =', events.length.toLocaleString('en-US'), 'events')
console.log('t =', `${seconds}.${milliseconds} seconds`)
