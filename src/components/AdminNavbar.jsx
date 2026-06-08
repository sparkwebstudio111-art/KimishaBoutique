import React, { useState } from "react";
import { navbarStyles } from "../assets/adminStyle";
import logo from "../images/logo.jpeg"
import {
  CalendarCheck,
  List,
  PlusCircle,
  Store,
  X,
  Menu,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const NavItem = ({ to, Icon, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navbarStyles.navItemBase} ${
          isActive
            ? navbarStyles.navItemActive
            : navbarStyles.navItemInactive
        }`
      }
      onClick={() => setOpen(false)}
    >
      {Icon && <Icon className={navbarStyles.navItemIcon} />}
      <span>{children}</span>
    </NavLink>
  );

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.mainBar}>
          
          {/* BRAND */}
          <div className={navbarStyles.brandContainer}>
            <NavLink to="/admin" className={navbarStyles.brandLogo}>
             <img src={logo} className="rounded-full " />
            </NavLink>

            <NavLink to="/admin" className={navbarStyles.brandText}>
              Kimisha Boutique
            </NavLink>
          </div>

          {/* DESKTOP NAV */}
          <nav className={navbarStyles.navContainer}>
            <div className={navbarStyles.navItemsContainer}>
              <NavItem to="/add" Icon={PlusCircle}>Add</NavItem>
              <NavItem to="/list" Icon={List}>List</NavItem>
              <NavItem to="/booking" Icon={CalendarCheck}>Orders</NavItem>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className={`${navbarStyles.navItemBase} cursor-pointer text-red-500 hover:bg-red-600`}
              >
                <LogOut className={navbarStyles.navItemIcon} />
                <span>Logout</span>
              </button>
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <div className={navbarStyles.rightContainer}>
            <button
              className={navbarStyles.mobileMenuButton}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className={navbarStyles.mobileMenuIcon} />
              ) : (
                <Menu className={navbarStyles.mobileMenuIcon} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className={navbarStyles.mobileDropdown}>
            <NavItem to="/add" Icon={PlusCircle}>Add</NavItem>
            <NavItem to="/list" Icon={List}>List</NavItem>
            <NavItem to="/booking" Icon={CalendarCheck}>Orders</NavItem>

            <button
              onClick={handleLogout}
              className={`${navbarStyles.navItemBase} text-red-500 w-full text-left hover:bg-red-600`}
            >
              <LogOut className={navbarStyles.navItemIcon} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default AdminNavbar;