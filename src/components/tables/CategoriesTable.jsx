import { useState } from "react";
import { profile } from "../../assets/getAssets";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../shared/ui/Pagination";

const CategoriesTable = ({ data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);
  const [postid, setpostId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto">
        <table className="table w-full table-pin-rows table-pin-cols  h-[calc(100%-75px)] ">
          <thead className="p-0">
            <tr className="font-bold  text-3xl text-blackHigh">
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">
                Sl.
              </th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">
                Image
              </th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">
                Title
              </th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">
                Author
              </th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5">
                Date
              </th>
              <th className="bg-tablenav text-base text-blackMediumEmp font-poppins font-semibold py-5 text-center">
                Actions
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
              {currentRows?.map((post, i) => (
                <tr className=" bg-white text-blackSemi" key={i}>
                  <td className="py-3">
                    {currentPage === 1 && i + 1 < 10
                      ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                      : rowsPerPage * (currentPage - 1) + i + 1}
                  </td>
                  <td className="py-3">
                    <img
                      src={post.imageUrl}
                      className="w-8 h-8 rounded-md"
                      alt=""
                    />
                  </td>
                  <td className="py-3 text-blackLowEmp text-base font-normal font-poppins">
                    {post?.title?.length > 35
                      ? post?.title.slice(0, 35) + "..."
                      : post?.title}
                  </td>
                  <td className="py-3 text-blackLowEmp text-base font-normal font-poppins">
                    {post?.author}
                  </td>
                  <td className=" py-3 text-blackLowEmp text-base font-normal font-poppins text-left">
                    {new Date(post?.timestamp * 1000).toLocaleDateString({
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>

                  <td className="flex gap-3 justify-center">
                    <span>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-trash"></i>
                    </span>
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
      </div>
    </div>
  );
};

export default CategoriesTable;
