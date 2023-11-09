import { TaskService } from '../../store'

export async function GET(request: Request) {
  // return Response.json({ status: 200, data: TaskService.allItems() })
  return Response.json({ status: 200, data: TaskService.getAllDummy() })
  // return Response.json({ status: 200, data: TaskService.getDummy() })
}
