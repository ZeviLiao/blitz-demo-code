import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function ProjectForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Description"
        type="text"
      />
      <LabeledTextField name="status" label="Status" placeholder="Status" type="text" />
      <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Description"
        type="text"
      />
      <LabeledTextField name="status" label="Status" placeholder="Status" type="text" />
      <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Description"
        type="text"
      />
      <LabeledTextField name="status" label="Status" placeholder="Status" type="text" />
      <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Description"
        type="text"
      />
      <LabeledTextField name="status" label="Status" placeholder="Status" type="text" />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
