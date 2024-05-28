import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="sidebar active">
            <ul>
                <li>
                    <a href = "/">
                        <AiOutlineHome/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;