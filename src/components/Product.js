import { memo } from "react";
const Product = ({name,price,remove,edit,product,btnState,index,length}) => {
    return (
        <div className={`${product.id %2 === 0 ?"bg-blue-300":"bg-sky-400"} flex flex-row  pt-5 h-16 text-yellow-50 ${btnState === product.id?"opacity-50":"" } ${index === 0?"rounded-t-2xl":"" } ${index ===length-1?"rounded-b-2xl":""}`}>       
        {/* <div className={`${btnState === product.id?"opacity-25":""} flex flex-row justify-center`}>        */}
            <h1 className="px-5 flex flex-1">{name}</h1>
            <h1 className="flex flex-1">{price}</h1>
            <div onClick={() => edit(product)} className={`px-2 cursor-pointer text-blue-600 font-bold `}>edit</div>
            <div onClick={()=>remove(product)} className="mr-5 text-lg cursor-pointer text-red-600 font-extrabold ">X</div>                
        </div>        
    );
    
}
export default memo(Product);