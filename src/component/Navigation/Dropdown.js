// import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <>
      {submenus.length > 1 ? (
        <>
          <div
            className={`mega__menu dropdownMenu ${dropdownClass} ${
              dropdown ? "show" : ""
            }`}
          >
            <div className="container">
              {submenus.map((submenu, index) => (
                <div className="menu__wrapper">
                  <h5>{submenu.title}</h5>
                  <ul className="dropdownMenu">
                    {submenu.items.map((item) => (
                      <li className="menu-items" key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                    {/* <MenuItems items={submenu} key={index} depthLevel={depthLevel} /> */}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {submenus.map((submenu, index) => (
            <ul
              className={`dropdownMenu ${dropdownClass} ${
                dropdown ? "show" : ""
              }`}
            >
              {submenu.items.map((item) => (
                <li className="menu-items" key={item.title}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
              {/* <MenuItems items={submenu} key={index} depthLevel={depthLevel} /> */}
            </ul>
          ))}
        </>
      )}
    </>
    // <ul className={`dropdownMenu ${dropdownClass} ${dropdown ? "show" : ""}`}>
    //   {submenus.map((submenu, index) => (
    //     <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
    //   ))}
    // </ul>
  );
};

export default Dropdown;
