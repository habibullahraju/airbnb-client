import Container from "../container/container";
import Logo from "../../components/Navbar/Logo"
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";


const Navbar = () => {
    return (
        <div className='fixed  top-0 w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Link className="hidden sm:block" to="/"><Logo></Logo></Link>
                    <SearchBar></SearchBar>
                    <DropdownMenu></DropdownMenu>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;