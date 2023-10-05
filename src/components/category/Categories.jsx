import Container from "../container/container";
import categories from "../../components/category/CategoryData"
import CategoryBox from "./CategoryBox";
import filterIcon from "../../assets/filterIcon.jpg"
import { useState } from "react";
import FilterModals from "../FilterModal/FilterModals";
import DisplayTotalBeforeTaxes from "../DisplayTotalBeforeTaxes/DisplayTotalBeforeTaxes";


const Categories = () => {
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
    return (
        <Container>
            <div className="pt-4 mt-20 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item, index) => (
                    <CategoryBox key={index} label={item.label} icon={item.icon}></CategoryBox>

                ))}
                <button onClick={()=>setIsOpenFilterModal(true)} className="btn lowercase mr-1 md:mr-0 text-sm btn-md"><img width={20} src={filterIcon} alt="" />Filter</button>
                <div className="flex gap-2 justify-center items-center border py-3 rounded-lg bg-gray-100 hover:bg-gray-200 px-2">
                <span className="hidden lg:block">Display Total Before Taxes</span> 
                <div className=" flex  lowercase">
                    <div><DisplayTotalBeforeTaxes></DisplayTotalBeforeTaxes></div>
                    </div>
                </div>
                     <FilterModals 
                     isOpenFilterModal={isOpenFilterModal}
                     setIsOpenFilterModal={setIsOpenFilterModal}
                     ></FilterModals>   
            </div>
            
        </Container>
    );
};

export default Categories;