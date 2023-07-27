import  style from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentPage } from './pages/accountContentPage/ContentPage';
import { LayoutAccount} from './layout/LayoutAccount';
import { Home } from './pages/homePage/Home'
import { Feature } from './pages/featurePages/Feature';
import { NoPage } from './pages/noPage/Page404';
import { Login } from './pages/registrationAndLogin/Login';
import { Registration } from './pages/registrationAndLogin/Registration';
import { TermsOfService } from './pages/terms/TermsOfService';






// function App() {
//   return (
//     <div className='app'>
//         <HomePage />
//         <Feature featureData={data1} />
//         <RegistrationAndLogin registrationAndLoginData={data2} />
//         <TermsOfService />
//         <ContentPage />
//         <BurgerList />
//     </div>
//   );
// }

// export default App;


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

          {/* <Route Component={LayoutList}>
            <Route path="/menuList/:menuListId" element={<BurgerList />} />
          </Route> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;



