import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar className="w-11/12 lg:w-5/6 mx-auto bg-transparent border-none ">
      <NavbarContainer>
        <NavbarBrand>
          <h2 className="text-[#FFC312] text-2xl font-semibold">
            Teeth Wizard
          </h2>
        </NavbarBrand>
        <NavbarList className="text-[#ffffff] space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/treatments">All Treatments</NavLink>
          <NavLink to="/appointments">My appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavbarList>
        <NavbarList>
          <Dropdown placement="bottom-end">
            <DropdownAction asChild>
              <Avatar>
                <AvatarImage src="/images/avatar/avatar-3.png" />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="border border-metal-100 dark:border-metal-800"
            >
              <DropdownItem>Statistics</DropdownItem>
              <DropdownItem>Duplicate</DropdownItem>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/treatments">All Treatments</NavLink>
          <NavLink to="/appointments">My appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
