import { TaskService } from '../../store'

export async function POST(request: Request) {
  const { name } = await request.json()
  const item = TaskService.addTask(name)
  return Response.json({ status: 200, data: item })
}
