import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="my-5 py-6">
        <div className="m-8 flex items-center justify-between gap-4 text-4xl">
            <a href="https://www.linkedin.com/in/sajal-sharma-281800289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
            <a href="https://github.com/Sajal-7"><FaGithub/></a>
            <a href="https://leetcode.com/u/21b0101046/"><SiLeetcode/></a>
        </div>
    </nav>
  )
}

export default Navbar
