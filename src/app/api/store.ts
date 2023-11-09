type Task = {
  id: number
  name: string
  created_at: number
  nameId: string
  time: number
  content: string
  image: string
  like: number
}
type Dummy_data = {
  id: number
  name: string
  nameId: string
  time: number
  content: string
  image: string
  like: number
  created_at: number
}


const dummy_data: Dummy_data[] = [
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'khoa vũ',
    nameId: '@khoavu5121',
    created_at: Math.ceil(Date.now() / 1000),
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque reiciendis atque quidem architecto voluptates eligendi facere quae natus id ad nisi a.',
    image:
      'https://plus.unsplash.com/premium_photo-1663951812931-bc7de64a7c3c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    like: 1623,
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'kingdome',
    nameId: '@kingdome321',
    time: 12,
    created_at: Math.ceil(Date.now() / 1000),
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque.',
    image:
      'https://images.unsplash.com/photo-1695808403904-a43973fb42a6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
    like: 1423,
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'cat',
    nameId: '@cat922',
    created_at: Math.ceil(Date.now() / 1000),
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1695754188473-ec8b56ddcfba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
    like: 2443,
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'gone',
    nameId: '@goneer11',
    created_at: Math.ceil(Date.now() / 1000),
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1696197018332-bc1d900ce169?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'bin',
    nameId: '@bin12331',
    created_at: Math.ceil(Date.now() / 1000),
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1696227256338-d3ba1b317189?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: 'fon',
    nameId: '@fon331',
    created_at: Math.ceil(Date.now() / 1000),
    time: 12,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos, autem amet fuga quos harum dolor eaque unipe fire mount.',
    image:
      'https://images.unsplash.com/photo-1695918431205-b70d3d43b332?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
    like: 443,
  },
]

let tasks: Task[] = []
let index = 0
function addTask(
  name: string,
  nameId: string,
  time: number,
  content: string,
  image: string,
  like: number
) {
  const item = {
    id: index,
    name,
    created_at: Math.ceil(Date.now() / 1000),
    nameId,
    time,
    content,
    image,
    like,
  }
 
  
  tasks.push(item)

  index++
  return tasks
}

let chidrenData

function deleteTask(id: number) {
  tasks.slice(id, 0)
}

function allItems() {
  return tasks
}
function getAllDummy() {
  return chidrenData = dummy_data.concat(tasks)
}
function getDummy() {
  return dummy_data
}
export const TaskService = { addTask, deleteTask, allItems, getAllDummy, getDummy }
