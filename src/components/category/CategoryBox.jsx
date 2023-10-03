import {  useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'


// eslint-disable-next-line react/prop-types
const CategoryBox = ({label, icon: Icon}) => {
    const [params , setParams] = useSearchParams()
    const categoryValue = params.get('category')
    const navigate = useNavigate()

    const handleClick = ()=>{
       let currentCategory = {};
       if (params) {
            currentCategory = qs.parse(params.toString());
       }
       const updatedQuery = {
        ...currentCategory,
          category: label
       }
       const url = qs.stringifyUrl({
        url:"/",
        query: updatedQuery
       },{skipNull: true})
       navigate(url)
    }
    return (
        <div onClick={handleClick}  className="flex cursor-pointer flex-col items-center justify-center gap-3 p-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
            <Icon size={26}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;