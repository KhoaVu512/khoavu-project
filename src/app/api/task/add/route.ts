import { TaskService } from '../../store'

export async function POST(request: Request) {
  const { name, nameId, time, content, image, like } = await request.json()
  const item = TaskService.addTask(name, nameId, time, content, image, like)
  return Response.json({ status: 200, data: item })
}
