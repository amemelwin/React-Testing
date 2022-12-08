import { memo } from "react";
const Input = ({value,setValue,name,placeholder}) => {
    return (
          <div className="flex flex-row items-center">
            <label htmlFor={name}>{name} : </label>  
          <input className="my-5 ml-5 px-2 border-solid border-2 border-blue-400  placeholder:italic placeholder:text-slate-400" placeholder={placeholder} id={name} value={value} onChange={(text) => setValue(text.target.value)} />
    </div>        
    )  
}
export default memo(Input);
      // <Input name="Product Name" setValue={setName} value={name} placeholder="Enter Product Name"/>
