import React from 'react'
import { Textarea } from '../ui/textarea'
import { cn } from '@/lib/utils'

interface TextAreaInputProps {
    label: string,
    register?: any,
    errors?: any,
    name: string,
    type?: string
    placeholder: string
    className?: string
}
export default function TextAreaInput({
    label,
    register,
    name,
    errors,
    type = "text",
    placeholder,
    className = "col-span-full"
}: TextAreaInputProps
) {
    return (
        <div className={cn("grid gap-2", className)}>
            <label htmlFor={`${name}`}>{label}</label>
            <Textarea
                {...register(`${name}`, { required: true })}
                id={`${name}`}
                name={`${name}`}
                type={type}
                placeholder={`${placeholder}`}
            />
            {errors[`${name}`] && (
                <span className='text-red-600 text-sm'>{label} is required</span>
            )}
        </div>
    )
}
