import Container from "../container/container";
import categories from "../../components/category/CategoryData"
import CategoryBox from "./CategoryBox";


const Categories = () => {
    return (
        <Container>
            <div className="pt-4 mt-20 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item, index) => (
                <CategoryBox key={index} label={item.label} icon={item.icon}></CategoryBox>
    
        ))}
            <button className="">filter</button>
            </div>
        </Container>
    );
};

export default Categories;