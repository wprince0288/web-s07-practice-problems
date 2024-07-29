import React, { useState, useEffect } from 'react'
import * as yup from 'yup'

// PROBLEM 1 - Fix the `formSchema`. Once it's working, the disabled button should enable itself when "username" has at least three characters in length, and when "fun" is a boolean with a value of true.

// PROBLEM 2 - After solving problem 1, validation error messages print to the console only. Fix the JSX so that the errors are also displayed on the page. Hint: the errors are being stored in component state as the user interacts with the form.

const formSchema = yup.object().shape({
  /* 1- This schema is all scrambled up! Reorder and uncomment the following lines:

  .boolean()
  username: yup
  .required(),
  .min(3, "Username must be at least 3 characters long")
  .string()
  .required(),
  fun: yup
  .oneOf([true], "You must have fun!")

  */
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required(),
  fun: yup
    .boolean()
    .oneOf([true], "You must have fun!")
    .required(),
})

export default function App() {
  let [values, setValues] = useState({ username: '', fun: false })
  let [errors, setErrors] = useState({ username: '', fun: '' })
  let [canSubmit, setCanSubmit] = useState(false)

  useEffect(() => {
    formSchema.isValid(values).then(setCanSubmit)
  }, [values])

  const onSubmit = event => {
    event.preventDefault()
    console.log('SUBMITTING', values)
  }
  const onChange = event => {
    let { type, name, checked, value } = event.target
    if (type == 'checkbox') value = checked
    setValues({ ...values, [name]: value })
    yup.reach(formSchema, name).validate(value)
      .then(() => setErrors({ username: '', fun: '' }))
      .catch(e => {
        console.log(e.errors[0])
        setErrors({ ...errors, [name]: e.errors[0] })
      })
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Username <input
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        </label>
        {/* 2- display username validation error here */}
        {errors.username}
      </div>
      <div>
        <label>Having fun <input
          name="fun"
          type="checkbox"
          onChange={onChange}
          checked={values.fun}
        />
        </label>
        {/* 2- display fun validation error here */}
        {errors.fun}
      </div>
      <input disabled={!canSubmit} type="submit" />
    </form>
  )
}
