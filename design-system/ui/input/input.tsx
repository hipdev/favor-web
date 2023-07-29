import clsx from 'clsx'
import React from 'react'

import {
  DeepMap,
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any> // Adjust 'any' to match your form data type if needed
  rules?: RegisterOptions
  name: keyof FieldValues
  errors?: DeepMap<any, FieldError>
  errorClassName?: string
}

export const Input: React.FC<InputProps> = ({
  register,
  rules,
  errors,
  errorClassName,
  ...inputProps
}) => {
  return inputProps.name ? (
    <>
      <input
        {...register(inputProps.name, rules)}
        {...inputProps}
        className='w-full rounded-full bg-light-white py-2.5 text-center text-sm text-black/80 placeholder-black/60 outline-primary/80'
      />
      {errors && errors[inputProps.name] && (
        <span
          className={clsx(
            'relative top-1 mt-1 text-sm text-white/80',
            errorClassName,
          )}
        >
          {errors[inputProps.name].message}
        </span>
      )}
    </>
  ) : (
    <p className='text-center text-white'>Please add a name for the input</p>
  )
}
