import mitt from 'mitt'

type Event = {
    foo:string,
    foo1?:string
}

const emitter = mitt<Event>()

export default emitter