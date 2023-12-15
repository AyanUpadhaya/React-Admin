import React from 'react'
import { writting } from '../assets/getAssets'

const Gallery = () => {
    return (
        <div className='w-full h-full p-6'>
            <div className='flex flex-col gap-10'

            >
                <div className='bg-white self-stretch rounded-lg p-4 flex justify-between'>
                    <h2 className='text-2xl font-semibold'>Gallery</h2>
                    <button className="btn ">
                        <i class="fa-solid fa-cloud-arrow-up fa-2xl"></i>
                    </button>

                </div>
                <div className='w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>



                    {
                        Array.from([1, 2, 3, 4, 5, 6]).map((card, i) => (
                            <div key={i} className=" w-full rounded-xl  shadow-normal flex flex-col shadow-lg  ">
                                <figure className="relative h-[188px] rounded-t-xl flex-1">
                                    <img
                                        src={writting}
                                        alt="card image"
                                        className="w-full h-full object-cover rounded-t-xl"

                                    />

                                </figure>

                                <div className="py-2 bg-white rounded-b-xl">
                                    <div className="card-actions justify-between px-2">
                                        <button className="btn "><i class="fa-solid fa-eye"></i></button>
                                        <button className="btn "><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>


                            </div>
                        ))
                    }


                </div>

            </div>

        </div>

    )
}

export default Gallery