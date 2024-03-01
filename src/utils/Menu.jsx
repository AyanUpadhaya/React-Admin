const Menu = ({
  handleMenuActive,
  svg,
  menutitle,
  showSidebar,
  menuitem,
  submenuRef,
  isArrowUp,
  menulist,
}) => {
  return (
    <li className="w-full overflow-hidden capitalize shrink-0 ">
      <div
        onClick={() => {
          handleMenuActive();
        }}
        className={`navlink text-white
              font-poppins flex items-center gap-4 w-full p-4 cursor-pointer font-bold `}
      >
        <span className="shrink-0">{svg}</span>
        <span
          className={` ${
            !showSidebar ? "hidden" : "block"
          } origin-left duration-200 flex justify-between items-center w-full`}
        >
          {menutitle}
          <i
            className={`${
              isArrowUp ? "rotate-180 duration-300" : "rotate-0 duration-300"
            } fa-solid fa-chevron-down`}
          ></i>
        </span>
      </div>
      {/* nested submenu */}
      {showSidebar && (
        <ul
          ref={(ref) => (submenuRef.current[{ menuitem }] = ref)}
          className={`flex flex-col gap-1 duration-300 dropdown-menu pl-10`}
          style={{
            maxHeight: isSubmenuOpen[{ menuitem }]
              ? `${submenuRef.current[{ menuitem }]?.scrollHeight}px`
              : "0",
          }}
        >
          {/* users  */}

          <li>
            <Link
              to="/users"
              className={`nested text-white font-poppins flex items-center gap-4 w-full p-4 cursor-pointer `}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span
                className={` ${
                  showSidebar ? "block" : "hidden"
                } origin-left duration-300 font-poppins`}
              >
                All Users
              </span>
            </Link>
          </li>
          {menulist.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`nested text-white font-poppins flex items-center gap-4 w-full p-4 cursor-pointer `}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span
                    className={` ${
                      showSidebar ? "block" : "hidden"
                    } origin-left duration-300 font-poppins`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Menu;
