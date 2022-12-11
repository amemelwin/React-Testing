// import { useNavigate, createSearchParams } from 'react-router-dom';

// export default From = ()=>{
//     const navigate = useNavigate();
//     const goOtherPage = ()=>{
//         const params = { name: 'Arkar Mann Aung', age: 26 };
//         navigate({
//             pathname: Routes.addQty,
//             search: `?${createSearchParams(params)}`
//         });
//     }
//     return (<div>From Page</div>);
// }

// import { useSearchParams } from "react-router-dom";

// export default GetPage = ()=>{
//     const [searchParams] = useSearchParams();
//     return (
//         <div>
//             name: {searchParams.get('name')}
//             age: {searchParams.get('age')}
//         </div>
//     );
// }