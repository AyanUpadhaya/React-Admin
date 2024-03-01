import React from 'react'

const Password = ({name,placeholder,label,...rest}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label || 'Password'}
        </label>
      </div>
      <div className="mt-2">
        <input
          name={name}
          type="password"
          placeholder={placeholder || "Enter your password..."}
          {...rest}
         
          className="block w-full rounded-md border-1 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default Password