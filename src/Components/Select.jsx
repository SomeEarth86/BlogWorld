/* eslint-disable react/prop-types */
import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {

    const id = useId();
    return (
        <div className='w-full'>
            {label &&
                <label
                    className={``}
                    htmlFor={id}
                >
                </label>
            }
            <select
                id={id}
                ref={ref}
                {...props}
                className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border bor-gray-200 w-full ${className}`}
            >
                {
                    options?.map((optionItem) => (
                        <option key={optionItem} value={optionItem}>
                            {optionItem}
                        </option>
                    ))
                }

            </select>
        </div>
    )
}

export default React.forwardRef(Select)