import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getTask from "../queries/getTask"
import { Task } from "../components/Task"

export async function generateMetadata(props: TaskPageProps): Promise<Metadata> {
  const params = await props.params
  const Task = await invoke(getTask, { id: Number(params.taskId) })
  return {
    title: `Task ${Task.id} - ${Task.name}`,
  }
}

type TaskPageProps = {
  params: Promise<{ taskId: string }>
}

export default async function Page(props: TaskPageProps) {
  const params = await props.params
  return (
    <div>
      <p>
        <Link href={"/tasks"}>Tasks</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Task taskId={Number(params.taskId)} />
      </Suspense>
    </div>
  )
}
