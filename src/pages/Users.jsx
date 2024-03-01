import { profile } from "../assets/getAssets";
import Searchbar from "../components/shared/search/Searchbar";
import UsersTable from "../components/tables/UsersTable"

const Users = () => {
  const data = [
    {
      _id:`one`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`two`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`three`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`four`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`five`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`six`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`seven`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`eight`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`nine`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`ten`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`eleven`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`twelve`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`thirteen`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`fourteen`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`fifteen`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
    {
      _id:`sixteen`,
      name:'Peter Parker',
      imgUrl:`${profile}`,
      email:'peter@gmail.com',
      timestamp:1702661352
    },
   
  ]

  let content = <UsersTable data={data}></UsersTable>
  
  return (
    <section className="h-full w-full ">
      <div className="bg-white shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <Searchbar title={'Users Table'}></Searchbar>
        <div className="h-[calc(100%-100px)] ">{content}</div>
      </div>
    </section>
    
  )
}

export default Users