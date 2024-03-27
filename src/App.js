import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';


// 1. 전체 상품 페이지, 로그인, 상품 상세페이지
//     - Navbar 생성하기.
// 2. 전체 상품 페이지
//    - 상품 전체를 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고, 다시 로그인 페이지가 보인다.
// 7. 상품을 검색할 수 있다.


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>

      </Routes>

    </div>
  );
}

export default App;
