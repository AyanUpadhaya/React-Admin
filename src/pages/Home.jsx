import React from 'react'
import Barchart from '../components/charts/Barchart'
import CustomAreaChart from '../components/charts/CustomAreaChart';

const Home = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='w-full h-full p-6'>
      <div className='flex flex-col gap-10'>
        {/* top */}
        <div className='bg-white self-stretch rounded-lg p-4'>
          <h2 className='text-4xl font-semibold mb-4'>Dashboard</h2>

          <div className='w-full flex items-start gap-4 '>
            
            {/* card 1 */}
            <div className='flex-1 bg-base-300 shadow-md p-3 rounded-xl'>
              <div className='bg-primary relative flex justify-center items-center mb-3 w-[80px] p-4 rounded-lg'>
                <span>
                <i class="fa-solid fa-chart-simple" style={{color:"#fafcff"}}></i>
                </span>

              </div>
              <div className=''>
                <h3 className='font-poppins   text-blackHighEmp'>Users</h3>
                <p className='text-blackHighEmp text-4xl font-semibold '>200+</p>

              </div>
            </div>

            {/* card 2 */}
            <div className='flex-1 bg-base-300 shadow-md p-3 rounded-xl'>
              <div className='bg-[#4CA750] relative flex justify-center items-center mb-3 w-[80px] p-4 rounded-lg'>
                <span>
                <i class="fa-solid fa-chart-line" style={{color:"#fafcff"}}></i>
                </span>

              </div>
              <div className=''>
                <h3 className='font-poppins   text-blackHighEmp'> Posts</h3>
                <p className='text-blackLowEmp text-4xl font-semibold '>200+</p>

              </div>
            </div>



            {/* card 3 */}

            <div className='flex-1 bg-base-300  shadow-md p-3 rounded-xl'>
              <div className='bg-[#DF2869] relative flex justify-center items-center mb-3 w-[80px] p-4 rounded-lg'>
                <span>
                <i class="fa-solid fa-user-plus" style={{color:"#fafcff"}}></i>
                </span>

              </div>
              <div className=''>
                <h3 className='font-poppins   text-blackHighEmp'>Subscribers</h3>
                <p className='text-blackLowEmp text-4xl font-semibold '>200+</p>

              </div>
            </div>


            {/* card 4 */}

            <div className='flex-1 bg-base-300  shadow-md p-3 rounded-xl'>
              <div className='bg-[#328BEC] relative flex justify-center items-center mb-3 w-[80px] p-4 rounded-lg'>
                <span>
                <i class="fa-solid fa-solid fa-dollar-sign" style={{color:"#fafcff"}}></i>
                </span>

              </div>
              <div className=''>
                <h3 className='font-poppins  text-blackHighEmp'>Ad Revenue</h3>
                <p className='text-blackLowEmp text-4xl font-semibold'>2000 $</p>

              </div>
            </div>

          </div>

        </div>

        {/* charts */}
        <div className='self-stretch flex gap-5'>
          <div className='bg-white rounded-xl p-4 w-full'>
            <h3 className='text-xl my-3 font-semibold text-blackHighEmp'>Website views</h3>
          <Barchart data={data}></Barchart>
          </div>
          <div className='bg-white rounded-xl p-4 w-full'>
          <h3 className='text-xl my-3 font-semibold text-blackHighEmp'>Revenue</h3>
          <CustomAreaChart></CustomAreaChart>
          </div>
         
        </div>

        
      </div>
    </div>
  )
}

export default Home