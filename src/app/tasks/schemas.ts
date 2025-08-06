import { z } from "zod"

export const CreateTaskSchema = z.object({
  name: z.string(),
  description: z.string(),
  completed: z.boolean(),
  priority: z.string(),
  dueDate: z.string().datetime(),
  name: z.string(),
  description: z.string(),
  completed: z.boolean(),
  priority: z.string(),
  dueDate: z.string().datetime(),
  name: z.string(),
  description: z.string(),
  completed: z.boolean(),
  priority: z.string(),
  dueDate: z.string().datetime(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateTaskSchema = CreateTaskSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteTaskSchema = z.object({
  id: z.number(),
})
