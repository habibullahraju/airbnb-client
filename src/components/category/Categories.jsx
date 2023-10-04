import Container from "../container/container";
import categories from "../../components/category/CategoryData"
import CategoryBox from "./CategoryBox";
import filterIcon from "../../assets/filterIcon.jpg"


const Categories = () => {
    return (
        <Container>
            <div className="pt-4 mt-20 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item, index) => (
                <CategoryBox key={index} label={item.label} icon={item.icon}></CategoryBox>
    
        ))}
            <button className="btn lowercase mr-1 md:mr-0 text-sm btn-md"><img width={20} src={filterIcon} alt="" />Filter</button>
                    <button className="btn lowercase">            <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text  mr-2">Display total before taxes</span> 
    <input type="checkbox" className="toggle"  />
  </label>
</div></button>
            </div>
        </Container>
    );
};

export default Categories;