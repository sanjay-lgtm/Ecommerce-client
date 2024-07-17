import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logoRotationVariant } from "../../data/AnimationConfig";
import LogoImage from '../../assets/logo.webp';
export const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <motion.img
        alt="Blog Logo"
        src={LogoImage}
        className="block w-[75px] h-[50px]"
        width="75"
        height="50"
        variants={logoRotationVariant}
        animate="rotate"
        layout="position"
      />
    </Link>
  );
};

export default Logo;
