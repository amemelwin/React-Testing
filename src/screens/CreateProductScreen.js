import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, createSearchParams } from 'react-router-dom';
import Product from "../components/Product";
import Input from "../components/Input";
import Button from "../components/Button";
import Routes from "../route/RouteName";
// 
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';
import { addProduct, setProduct } from "../store/reducer/productSlice";

const CreateProductScreen = () => {
  // form store
  const count = useSelector(state => state.counter.value);
  const product = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  // const [product, setProducts] = useState([
  //   {id:1,name:'photo',price:0},
  //   {id:2,name:'photo',price:0},
  //   {id:3,name:'photo',price:0},
  //   {id:4,name:'photo',price:0}
  // ]);

  const defBtnColor = 'cursor-pointer px-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2  border-b-4 border-blue-700 hover:border-blue-500 rounded';
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [isEdit, setIsEdit] = useState(0);
  const [errMsg, setErrMsg] = useState('');
  const [btnName, setBtnName] = useState('Add');
  const [btnStyle, setBtnStyle] = useState(defBtnColor);
  const navigate = useNavigate();      
  const add = useCallback(() => {
    if (name && price) {
      console.log("True");
      // setProduct([...product, { id:product.length+1,name, price }]);         
      dispatch(
        setProduct([...product,{ 
          id:product.length+1,
          name,
          price: parseInt(price) 
        }])
      );
      setName("");
      setPrice(0);
    } else {
      console.log("False");
      setErrMsg(
        !name ? "Please Insert Name" :
          !price ? "Please Insert Price" :
            "Error"
      );
      autoCloseErrMsg();
    }    
  }, [name, price, product]);   
  const autoCloseErrMsg = async () => {
    console.log("Before");
    await sleep(3000);
    console.log("After");
    setErrMsg("");    
  }
  const remove = useCallback(({ id }) => {
    if (isEdit) {
      setErrMsg(" Can not delete items while you edit");
      autoCloseErrMsg();
      return;
    }
    const newProduct = product.filter(p => p.id !== id);
    // setProduct(newProduct);
    dispatch(
      setProduct(newProduct)
    );
    // console.log("Delete ",id);     
  }, [product,isEdit]);
  const initEdit = useCallback(({ id, name, price }) => {
    console.log(id);
    setIsEdit(id);
    setName(name);
    setPrice(price);  
    setBtnStyle('cursor-pointer px-5 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2  border-b-4 border-orange-700 hover:border-orange-500 rounded');
    setBtnName("Save");
    // editProduct();
  }, [isEdit,name,price]);
  const editProduct = useCallback(async() => {
    // solution
    let temp = [];
    product.map(p=>{
      if (p.id === isEdit) {
        temp = [...temp,{id:p.id, name, price }];
      } else {
        temp = [...temp,p];
      }
    });
    // solution
    // const newProduct = product.map(p => {
    //   // TODO: 
    //   if (p.id === isEdit) {
    //     p.name = name;
    //     p.price = price;
    //     return p;
    //   } else {
    //     return p;
    //   }
    // });
    setIsEdit(0);
    setName('');
    setPrice(0);
    // setProduct(newProduct);  
    dispatch( setProduct(temp) );
    setBtnName("Add");
    setBtnStyle(defBtnColor);
    // add();
    //reset();
  }, [product, name, price, isEdit]);
  const buttonHandler = useCallback(() => {
    console.log("isEdit Value", isEdit);
    if (isEdit) {     
      editProduct();       
    } else {
      add();
    }
   }, [isEdit,btnName,btnStyle,product,name,price]);
  const sleep = ms => new Promise( _=>setInterval(_,ms) );
  const addQuantity = useCallback(()=>{
    navigate(Routes.addQty,{state: {
      product
    }});
  },[product]);
  const testing = (test)=>{
    console.log(test);
  }
  useEffect(() => {

  });
  return (
    <div className="flex container mx-auto justify-evenly">     
      <div className="flex-col items-center mt-16 justify-center">
        <div className="text-2xl text-center font-semibold ">React Hook Tutorial</div>
        <div className="text-lg text-center font-semibold italic text-blue-500 pt-4 pb-8 ">Trained By Arkar Mann Aung</div>
        <Input name="Product Name" setValue={setName} value={name} placeholder="Enter Product Name"/>
        <Input name="Product Price" setValue={setPrice} value={price} placeholder="Enter Product Price" /> 
        
        <Button 
          onClick={ buttonHandler }
          style={ btnStyle } 
          text={ btnName } 
        />

        <button onClick={()=>dispatch(increment())}>{count}</button>
        <button onClick={()=>dispatch(addProduct())}>Add Product</button>
        <br/>
        <br/>
        <br/>
        <button onClick={ testing.bind('hello world') }>Bind Method</button>

        <div className="text-red-600 mt-5 italic font-bold animate-pulse">{ errMsg}</div>
        <p className="font-bold text-center text-lg py-5">Product List</p>
        { 
        product.map((p, i) => {     
            return (              
              <Product
                btnState={isEdit}
                remove={remove}
                edit={initEdit}
                product={p}
                name={p.name}
                price={p.price}
                index={i}
                id={p.id}
                length={product.length}
                key={i} />           
            );            
        })        
        }    
        <div className="mt-5">
          Source Code 👉<a href="https://github.com/amemelwin/React-Testing.git" className="text-blue-500 ml-5  underline italic" >GitHub </a>       
        </div>
        <div className="text-sm">This Code will not be covered for React Hook if you don't have the knowledge in React</div>
        <button onClick={addQuantity} className="text-lg text-center font-semibold italic text-pink-500 pt-4 pb-8  flex justify-end">By Amie</button>
      </div>
    </div>
    )  
};
export default memo(CreateProductScreen);