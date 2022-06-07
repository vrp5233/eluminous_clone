import styled from "styled-components";

export const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9990;
  background-color: rgba(var(--white));
  transition: var(--trans_a3);
  &.is-sticky {
    background-color: rgba(var(--white));
    -webkit-box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    transition: var(--trans);
  }
  & .container {
    max-width: 1700px;
  }
  & .navbar-brand img {
    max-width: 220px;
  }
  & .menus {
    display: flex;
    list-style: none;
    & .menu-items {
      position: relative;
      font-size: 14px;
      padding-right: 18px;
      padding-left: 18px;
      & a {
        display: block;
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }
      & button {
        color: inherit;
        font-size: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
      }
      & a,
      & button {
        font-weight: 600;
        font-size: 18px;
        color: #22292f;
        text-transform: capitalize;
        line-height: 75px;
        border-bottom: 5px solid transparent;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        display: block;
      }
      &:hover > a,
      &:hover > button {
        text-decoration: none;
        border-bottom-color: #2166f3;
      }
    }
  }
  & .dropdownMenu {
    list-style: none;
    position: absolute;
    width: 300px;
    background-color: #242d34;
    color: #fff;
    top: 47px;
    left: -20px;
    padding: 20px 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transform: translateY(100px);
    -ms-transform: translateY(100px);
    transform: translateY(100px);
    -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    z-index: 9999;
    & .dropdown-submenu {
      position: absolute;
      left: 100%;
      top: -7px;
    }
    & .menu-items {
      padding: 0 30px;
      position: relative;
      & a {
        border: 0;
        text-transform: capitalize;
        font-size: 14px;
        position: relative;
        margin-right: 0;
        line-height: 18px;
        color: #fff;
        margin-bottom: 6px;
        padding-bottom: 5px;
        padding-left: 17px;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &::after {
          content: "\f0da";
          position: absolute;
          left: 0;
          font: normal normal normal 14px/1 FontAwesome;
          top: 12px;
          color: rgba(255, 255, 255, 0.2784313725490196);
        }
        &:hover {
          background-color: transparent;
          color: #169ef8;
        }
      }
    }
  }
  & .dropdownMenu.show {
    display: block;
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(33px);
    -ms-transform: translateY(33px);
    transform: translateY(33px);
  }
`;
