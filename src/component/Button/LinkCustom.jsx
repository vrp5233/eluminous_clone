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
  target,
}) => {
  return (
    <LinkCustom BtnTransparent={BtnTransparent} className={ParentClass}>
      <Link className={`btn ${colorChange}`} type="submit">
        {titleText}
        <CgArrowLongRight />
      </Link>
    </LinkCustom>
  );
};

export default ButtonCustom;
