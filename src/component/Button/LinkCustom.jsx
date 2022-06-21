import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { BtnWrap } from "./ButtonCustom.style.js";
// import './Button.css'

// className={`btn ${colorChange}`}
const LinkCustom = ({
  linkUrl,
  titleText,
  colorChange,
  BtnTransparent,
  ParentClass,
  target,
}) => {
  return (
    <BtnWrap BtnTransparent={BtnTransparent} className={ParentClass}>
      <Link to={linkUrl} className={`btn ${colorChange}`} target={target}>
        {titleText}
        <CgArrowLongRight />
      </Link>
    </BtnWrap>
  );
};

export default LinkCustom;
