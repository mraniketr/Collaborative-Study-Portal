import React from 'react'
import classNames from "classnames"

const InputField = ({ type, name, error, label, value, onChange, placeholder, labelClassname, inputClassname, inputProps }) => {
    return (
        <div className='flex flex-col mt-6'>
            <div className={classNames('flex flex-row text-sm text-gray-500', labelClassname)}>{label}</div>
            <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} {...inputProps} className={classNames("border rounded-md px-3 h-11 mt-1 focus-within:outline-none", inputClassname)} />
            {error && <div className={classNames('flex flex-row text-xs mt-0.5 text-red-500', labelClassname)}>{error}</div>}
        </div>
    )
}

export default InputField