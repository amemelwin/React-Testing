import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const AddProductQtyScreen = ()=>{
    const location = useLocation();
    // let name = location.state.name;
    // useEffect(()=>{
    //     console.log(location.state.name);
    // })
    return (
        <div>
            Hello World 
            {location.state.name}
        </div>
    );
}
export default memo(AddProductQtyScreen);