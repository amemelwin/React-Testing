import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const AddProductQtyScreen = ()=>{
    const location = useLocation();    
    return (
        <div>           
            {location.state.name}
        </div>
    );
}
export default memo(AddProductQtyScreen);