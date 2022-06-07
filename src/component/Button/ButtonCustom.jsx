import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { LinkCustom } from "./ButtonCustom.style.js";
// import './Button.css'

// className={`btn ${colorChange}`}
const ButtonCustom = ({ linkUrl, titleText, colorChange, BtnTransparent }) => {
  return (
    // <Link
    //   BtnTransparent={BtnTransparent}
    //   to={linkUrl}
    //   className={`btn ${colorChange}`}
    // >
    //   {titleText}
    //   <BsArrowRight />
    // </Link>
    <LinkCustom BtnTransparent={BtnTransparent}>
      <Link to={linkUrl} className={`btn ${colorChange}`}>
        {titleText}
        <BsArrowRight />
      </Link>
    </LinkCustom>
  );
};

export default ButtonCustom;
