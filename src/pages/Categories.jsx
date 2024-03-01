import Searchbar from "../components/shared/search/Searchbar";
import CategoriesTable from "../components/tables/CategoriesTable";
import { dummyBlogPostData } from "../db/db";

const Categories = () => {
  let content = <CategoriesTable data={dummyBlogPostData}></CategoriesTable>;
  return (
    <section className="h-full w-full ">
      <div className="bg-white shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <Searchbar title={"Categories Table"} placeholder={'Search Categories'}></Searchbar>
        <div className="h-[calc(100%-100px)] ">{content}</div>
      </div>
    </section>
  );
};

export default Categories;
