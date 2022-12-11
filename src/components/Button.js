import { memo } from "react";
const Button = ({ btnState, editProductFunc,addProductFunc}) => {
    return (
      <div className="flex flex-row justify-center">
          <button  onClick={() => btnState ?editProductFunc(): addProductFunc()} className={btnState === 0  ? " cursor-pointer px-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2  border-b-4 border-blue-700 hover:border-blue-500 rounded" : " cursor-pointer px-5 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2  border-b-4 border-orange-700 hover:border-orange-500 rounded"}>
            { btnState?"Save":"Add" }
          </button>
      </div>
   )    
}
export default memo(Button);

