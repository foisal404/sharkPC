import wing from "../../public/wing.png";
const Navhead = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Accessories</summary>
          <ul className="p-2 bg-[#1299E8]">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1299E8] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#1299E8]"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex relative">
          <a className="btn btn-ghost normal-case text-3xl font-bold z-10">
            sharkPC
          </a>
          <img src={wing} alt="" className="h-12 absolute z-0 left-10 -top-2" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm">👍</a>
      </div>
    </div>
  );
};

export default Navhead;
