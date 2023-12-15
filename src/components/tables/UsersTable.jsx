import React, { useState } from 'react'
import { profile } from '../../assets/getAssets'
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../shared/ui/Pagination';

const UsersTable = ({data}) => {
    const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);
  const [userid,setUserId] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  return (
    <div className="h-full flex flex-col justify-between">
        <div className="overflow-x-auto">
        <table className="table w-full table-pin-rows table-pin-cols  h-[calc(100%-75px)] ">
          <thead className="p-0">
            <tr className="font-bold  text-3xl text-blackHigh">
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">Sl.</th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">Photo</th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">Name</th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">Email</th>
           
              {/* date */}
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5 flex justify-end gap-2 cursor-pointer" onClick={()=>setIsAscending(prev=>!prev)}>
            
                Join Date
              </th>
              
            </tr>
          </thead>
          {currentRows?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="10" className="">
                  No data
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="">
              {currentRows?.map((user, i) => (
                <tr className=" bg-white text-blackSemi" key={i}>
                  <td className="py-3">
                    {currentPage === 1 && i + 1 < 10
                      ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                      : rowsPerPage * (currentPage - 1) + i + 1}
                  </td>
                  <td className="py-3">
                  <img
                  src={user.imgUrl}
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
                  </td>
                  <td className="py-3 text-blackLowEmp text-base font-normal font-poppins">
                  {user?.name?.length>16?user?.name.slice(0,16)+"...":user?.name}
                  </td>
                  <td className="py-3 text-blackLowEmp text-base font-normal font-poppins">{user?.email}</td>
                  <td className="py-3 text-blackLowEmp text-base font-normal font-poppins text-right">
                  {new Date(user?.timestamp*1000).toLocaleDateString({
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                  })}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          )}
        </table> 
       
    </div>
    <div className="w-full">
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRows={data?.length}
        ></Pagination>
    {/* <ConfirmationModal title={'News'} handleStatus={handleDelete} ></ConfirmationModal> */}
        
        </div> 
        
    </div>
  )
}

export default UsersTable