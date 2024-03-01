import Searchbar from "../components/shared/search/Searchbar";
import PostsTable from "../components/tables/PostsTable";
import { dummyBlogPostData } from "../db/db";

const Posts = () => {
  let content = <PostsTable data={dummyBlogPostData}></PostsTable>
  return (
    <section className="h-full w-full ">
      <div className="bg-white shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <Searchbar title={"Posts Table"}></Searchbar>
        <div className="h-[calc(100%-100px)] ">{content}</div>
      </div>
    </section>
  );
};

export default Posts;
