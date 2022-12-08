import { memo } from "react";
const Product = ({name,price,remove,edit,product,btnState,id}) => {
    return (
        <div className={`${product.id %2 === 0 ?"bg-pink-400":"bg-sky-400"} flex flex-row justify-center text-yellow-50 ${btnState === product.id?"opacity-25":"" }`}>       
        {/* <div className={`${btnState === product.id?"opacity-25":""} flex flex-row justify-center`}>        */}
                <h1 className="px-5">{name}</h1>
                <h1>{price}</h1>
                <div  onClick={()=>edit(product) } className="px-2 cursor-pointer text-blue-600 font-bold">edit</div>
                <div onClick={()=>remove(product)} className="px-2 cursor-pointer text-red-600 font-extrabold">X</div>
        </div>        
    );
    
}
export default memo(Product);