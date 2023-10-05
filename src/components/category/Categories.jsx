import Container from "../container/container";
import categories from "../../components/category/CategoryData"
import CategoryBox from "./CategoryBox";
import filterIcon from "../../assets/filterIcon.jpg"
import { useState } from "react";
import FilterModals from "../FilterModal/FilterModals";


const Categories = () => {
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
    return (
        <Container>
            <div className="pt-4 mt-20 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item, index) => (
                    <CategoryBox key={index} label={item.label} icon={item.icon}></CategoryBox>

                ))}
                <button onClick={()=>setIsOpenFilterModal(true)} className="btn lowercase mr-1 md:mr-0 text-sm btn-md"><img width={20} src={filterIcon} alt="" />Filter</button>
                <button className="btn lowercase"><div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text  mr-2">Display total before taxes</span>
                        <input type="checkbox" className="toggle" />
                    </label>
                </div></button>
                     <FilterModals 
                     isOpenFilterModal={isOpenFilterModal}
                     setIsOpenFilterModal={setIsOpenFilterModal}
                     ></FilterModals>   
            </div>
        </Container>
    );
};

export default Categories;