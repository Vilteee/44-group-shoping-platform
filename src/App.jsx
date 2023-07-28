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



