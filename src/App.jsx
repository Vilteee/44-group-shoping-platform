import  style from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentPage } from './pages/accountContentPage/ContentPage';
import { LayoutAccount} from './layout/LayoutAccount';
import { LayoutList} from './layout/LayoutList';
import { Home } from './pages/homePage/Home'
import { Feature } from './pages/featurePages/Feature';
import { NoPage } from './pages/noPage/Page404';
import { Login } from './pages/registrationAndLogin/Login';
import { Registration } from './pages/registrationAndLogin/Registration';
import { TermsOfService } from './pages/terms/TermsOfService';
import { BurgerList } from './pages/menuList/BurgerList';
import { ProductCatalog } from './pages/productCatalog/ProductCatalog';
import { ShopsCatalog } from './pages/shopsCatalog/ShopsCatalog';
import { NewShoppingCart } from './pages/newShoppingCart/NewShoppingCart';
import { ShoppingCarts } from './pages/shoppingCarts/ShoppingCarts';
import { NewProduct } from './pages/newProduct/NewProduct';
import { NewShop } from './pages/newShop/newShop';
import { Settings } from './pages/settings/Settings';




function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/feature/:featureId" element={<Feature />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/registration" element={ <Registration />} />
          <Route path="/terms" element={<TermsOfService /> } />
      
          <Route Component={LayoutAccount}>
            <Route path="/account" element={<ContentPage />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/shops" element={<ShopsCatalog />} />
            <Route path="/new-shopping-cart" element={<NewShoppingCart />} />
            <Route path="/shopping-carts" element={<ShoppingCarts />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/new-shop" element={<NewShop />} />
            <Route path="/settings" element={<Settings />} />

          </Route>
          <Route Component={LayoutList}>
            <Route path="/menu-list" element={<BurgerList />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;



