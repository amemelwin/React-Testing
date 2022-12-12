import { memo } from "react";
/*
    @params onClick @type Function
    @params style @type String
    @params text @type String
*/
const Button = ({ onClick, style, text }) => {
    return (
      <div className="flex flex-row justify-center">
            <button onClick={ onClick } className={ style } >             
                { text }   
          </button>
      </div>
   )    
}
export default memo(Button);

