import Container from "../container/container";
import Logo from "../../components/Navbar/Logo"
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { ROOMS_CONTEXTS } from "../../provider/RoomsDataProvider";


const Navbar = () => {
    const {setReFetch} = useContext(ROOMS_CONTEXTS)
    const navigate = useNavigate()
    const handleNavigateAndReFetch = () =>{
        navigate("/")
        setReFetch( previews => !previews)
    }
    return (
        <div className='fixed  top-0 w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Link onClick={handleNavigateAndReFetch} className="hidden sm:block" to="/"><Logo></Logo></Link>
                    <SearchBar></SearchBar>
                    <DropdownMenu></DropdownMenu>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;