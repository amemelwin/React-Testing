import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CreateProductScreen from '../screens/CreateProductScreen';
import AddProductQtyScreen from '../screens/AddProductQtyScreen';
import RouteName from './RouteName';

const RouterView = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={RouteName.root} element={<CreateProductScreen />} />
                <Route path={RouteName.addQty} element={<AddProductQtyScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouterView;