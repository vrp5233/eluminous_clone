import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { LinkCustom } from "./ButtonCustom.style.js";
// import './Button.css'

// className={`btn ${colorChange}`}
const ButtonCustom = ({
  linkUrl,
  titleText,
  colorChange,
  BtnTransparent,
  ParentClass,
}) => {
  return (
    // <Link
    //   BtnTransparent={BtnTransparent}
    //   to={linkUrl}
    //   className={`btn ${colorChange}`}
    // >
    //   {titleText}
    //   <BsArrowRight />
    // </Link>
    <LinkCustom BtnTransparent={BtnTransparent} className={ParentClass}>
      <Link to={linkUrl} className={`btn ${colorChange}`}>
        {titleText}
        <CgArrowLongRight />
      </Link>
    </LinkCustom>
  );
};

export default ButtonCustom;
