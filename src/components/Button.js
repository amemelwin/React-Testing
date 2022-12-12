import { memo } from "react";
const Button = ({ btnFunc,btnStyle,btnName}) => {
    return (
      <div className="flex flex-row justify-center">
            <button onClick={() => btnFunc()} className={btnStyle} >             
                {btnName}   
                {console.log({ btnName })}
                {console.log({ btnStyle })}
          </button>
      </div>
   )    
}
export default memo(Button);

