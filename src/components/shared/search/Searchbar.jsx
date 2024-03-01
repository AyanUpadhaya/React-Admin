import React from 'react'

const Searchbar = ({title,placeholder}) => {
  return (
    <div className="bg-[#1E293B] text-white w-full flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-base leading-normal py-6 px-4 ">
          {title}
        </h3>
      </div>
      {/* plus */}
      <div className="flex-1 flex-shrink-0 mr-10 flex items-center gap-3 ">
        <div className="flex-1 ">
          <input
            type="text"
            placeholder={placeholder || 'Type any'}
            className="input input-bordered w-full max-w-md bg-white text-[#2f2f2f] rounded-md"
          />
        </div>
        <button className="text-4xl">
          <i
            className="fa-solid fa-square-plus  text-white"
            style={{ color: "#ffff" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Searchbar