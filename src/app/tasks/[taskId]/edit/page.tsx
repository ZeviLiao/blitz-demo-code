import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getTask from "../../queries/getTask"
import { EditTask } from "../../components/EditTask"

type EditTaskPageProps = {
  params: Promise<{ taskId: string }>
}

export async function generateMetadata(props: EditTaskPageProps): Promise<Metadata> {
  const params = await props.params
  const Task = await invoke(getTask, { id: Number(params.taskId) })
  return {
    title: `Edit Task ${Task.id} - ${Task.name}`,
  }
}

export default async function Page(props: EditTaskPageProps) {
  const params = await props.params
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditTask taskId={Number(params.taskId)} />
      </Suspense>
    </div>
  )
}
