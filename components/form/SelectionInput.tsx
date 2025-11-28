"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type SelectionInputProps = {
    label: string
    register?: any
    className: string
    name: string
    option: OptionInputProps[]
    multiple?: boolean
    OptionTitle?: string
}
type OptionInputProps = {
    label: string
    value: string
}

export default function SelectionInput({
    OptionTitle = "Select an option",
    label,
    name,
    register,
    className = "sm:col-span-2",
    option = [],
    multiple = false,

}: SelectionInputProps
) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 mb-2"
            >
                {label}
            </label>
            <div className="mt-2">
                <Select
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    multiple={multiple}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={OptionTitle} />
                    </SelectTrigger>
                    <SelectContent>
                        {option.map((option, i: number) => {
                            return (
                                <SelectItem key={i} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
