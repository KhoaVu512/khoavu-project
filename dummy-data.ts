const DUMMY_EVENTS = [
  {
    id: 'e1',
    name: 'khoa vũ',
    nameId: '@khoavu5121',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque reiciendis atque quidem architecto voluptates eligendi facere quae natus id ad nisi a.',
    image:
      'https://plus.unsplash.com/premium_photo-1663951812931-bc7de64a7c3c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    like: 1623,
  },
  {
    id: 'e2',
    name: 'kingdome',
    nameId: '@kingdome321',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque.',
    image:
      'https://images.unsplash.com/photo-1695808403904-a43973fb42a6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
    like: 1423,
  },
  {
    id: 'e3',
    name: 'cat',
    nameId: '@cat922',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1695754188473-ec8b56ddcfba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
    like: 2443,
  },
  {
    id: 'e4',
    name: 'gone',
    nameId: '@goneer11',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1696197018332-bc1d900ce169?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
  {
    id: 'e5',
    name: 'bin',
    nameId: '@bin12331',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1696227256338-d3ba1b317189?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
  {
    id: 'e6',
    name: 'fon',
    nameId: '@fon331',
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1695918431205-b70d3d43b332?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
]

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getEventWithId(id:string) {
  return DUMMY_EVENTS.filter(item => item.id === `${id}`)
}