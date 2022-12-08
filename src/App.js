import { useState, useEffect, useCallback, memo } from "react";
import Product from "./components/Product";
import Input from "./components/Input";
import Button from "./components/Button";
const App = () => {
  const [product, setProduct] = useState([{id:1,name:'photo',price:0}]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [isEdit, setIsEdit] = useState(0);
   
  useEffect(() => {
      // console.log("UPName: ",updateName);
      // console.log("UpPrice ",updatePrice);
      // console.log(product);
  });  
  const add = useCallback(() => {
    setProduct([...product, { id:product.length+1,name, price }]);    
    setName("");
    setPrice(0);
  }, [name, price, product]);   
  const remove = useCallback(({ id }) => {
    const newProduct = product.filter(p => p.id !== id);
      setProduct(newProduct);
    // console.log("Delete ",id);    
  }, [product]);
  const initEdit = useCallback(({id,name,price}) => {
    setIsEdit(id);
    setName(name);
    setPrice(price);    
  }, []);
  const editProduct = useCallback(async() => {
    const newProduct = product.map(p => {
      if (p.id === isEdit) {
        p.name = name;
        p.price = price;
        return p;
      } else {
        return p;
      }
    });
    setIsEdit(0);
    setName('');
    setPrice(0);
    setProduct(newProduct);   
    //reset();
  }, [product, name, price, isEdit]);
  // const sleep = ms => new Promise( _=>setInterval(_,ms) );
  // const reset = async () => {   
  //   await sleep(1000);    
  // }
  return (
    <div className="flex flex-row container mx-auto justify-evenly">     
      <div className="flex-col items-center mt-16">
        <Input name="Product Name" setValue={setName} value={name} placeholder="Enter Product Name"/>
        <Input name="Product Price" setValue={setPrice} value={price} placeholder="Enter Product Price" /> 
        <Button btnState={isEdit} editProductFunc={editProduct} addProductFunc={add} />
        <p className="font-bold text-center text-lg py-5">Product List</p>
        { 
        product.map((p, i) => {
     
            return (              
              <Product btnState={isEdit} remove={remove} edit={initEdit} product={p} name={p.name} price={p.price} key={i} id={p.id} />           
            );            
        })        
        }    
      </div>
       
    </div>
    )  
};
export default memo(App);