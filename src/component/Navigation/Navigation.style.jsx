import styled from "styled-components";

export const NavigationToolbarWrapper = styled.div`
  padding: 7px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #414549;
  line-height: 1.2;
  letter-spacing: 0.6px;
  svg {
    font-size: 20px;
    margin-right: 6px;
  }
`;
export const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9990;
  background-color: rgba(var(--white));
  background-color: ${({ bg }) => bg};
  transition: var(--trans_a3);
  &.is-sticky {
    background-color: rgba(var(--white));
    -webkit-box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    transition: var(--trans);
  }
  nav {
    padding: 0;
    overflow: hidden;
  }
  nav:hover {
    overflow: inherit;
  }
  .container {
    max-width: 1730px;
  }
  .navbar-brand img {
    max-width: 220px;
    @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
      max-width: 180px;
    }
  }
  .menus {
    display: flex;
    list-style: none;
    .menu-items {
      position: relative;
      font-size: 14px;
      padding-right: 18px;
      padding-left: 18px;
      a {
        display: block;
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }
      button {
        color: inherit;
        font-size: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
        svg {
          transition: var(--trans_a3);
          font-size: 22px;
          width: auto;
          color: rgba(var(--black3));
        }
        &:hover svg {
          transform: rotate(180deg);
          color: rgba(var(--blue));
        }
      }
      a,
      button {
        font: 600 18px/75px "Inter", sans-serif;
        color: #22292f;
        text-transform: capitalize;
        border-bottom: 5px solid transparent;
        transition: var(--trans_a3);
        display: block;
      }
      &:hover > a,
      &:hover > button,
      &.active a,
      &.active button {
        text-decoration: none;
        border-bottom-color: #2166f3;
      }
      .mega__menu {
        position: absolute;
        left: 0;
        right: 0;
        min-width: 100vw;
        box-shadow: 0 2px 15px rgb(0 0 0 / 3%);
        padding: 50px 0;
        z-index: 0;
        .container {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          .menu__wrapper {
            flex: 0 0 calc(20% - 0px);
            padding: 0 10px;
            width: 100%;
            h5 {
              color: rgba(var(--black));
              font-weight: 600;
              text-transform: uppercase;
              font-size: 18px;
            }
            .dropdownMenu {
              position: static;
              transform: translateY(0px);
              box-shadow: none;
              width: auto;
              visibility: visible;
              opacity: 1;
              border: 0;
              .menu-items {
                padding: 0;
                a {
                  padding: 10px 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .dropdownMenu,
  .mega__menu {
    list-style: none;
    position: absolute;
    width: 300px;
    /* background-color: #242d34; */
    color: #fff;
    top: 47px;
    left: -20px;
    padding: 20px 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    transform: translateY(100px);
    box-shadow: 0 12px 20px rgb(0 0 0/10%);
    z-index: 9999;
    background-color: #fff;
    border-top: 1px solid #e3e3e3;
    .dropdown-submenu {
      position: absolute;
      left: 100%;
      top: -7px;
    }
    .menu-items {
      padding: 0 30px;
      position: relative;

      a {
        border: 0;
        text-transform: capitalize;
        font: 400 16px/18px "Inter", sans-serif;
        position: relative;
        color: rgba(var(--black));
        margin: 0 0 6px 0;
        padding: 10px 0 10px 17px;
        @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
          font: 400 15px/18px "Inter", sans-serif;
        }
        &:last-child {
          margin-bottom: 0;
        }
        /* &::after {
          content: "\f0da";
          position: absolute;
          left: 0;
          font: normal normal normal 14px/1 FontAwesome;
          top: 12px;
          color: rgba(255, 255, 255, 0.2784313725490196);
        } */
        &:hover,
        &.active {
          background-color: transparent;
          color: rgba(var(--blue));
        }
      }
    }
  }
  .dropdownMenu.show,
  .mega__menu.show {
    display: block;
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(33px);
    -ms-transform: translateY(33px);
    transform: translateY(33px);
  }
  .btn {
    min-width: 250px;
    min-height: 52px;
    font-size: 18px;
    padding: 0 10px;
    @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
      font-size: 16px;
      min-width: 180px;
    }
  }
`;
