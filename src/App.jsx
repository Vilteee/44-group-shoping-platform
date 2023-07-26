import  style from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BurgerList } from './components/burgerList/BurgerList';
import { ContentPage } from './components/contentPage/ContentPage';
import { TermsOfService } from './components/termsOfService/TermsOfService';
import { RegistrationAndLogin } from './components/registrationAndLogin/RegistrationAndLogin';
import { Page404 } from './pages/Page404';
import { LayoutAccount} from './layout/LayoutAccount';
import { LayoutAuth} from './layout/LayoutAuth';
import { LayoutList } from './layout/LayoutList;'
import { Home} from '/pages/homePage/Home'
import { Feature } from './pages/featurePages/Feature';




const data2 = [
  {
    titleOfPage: 'Create Your account',
    button1: 'Register',
    button2: 'Login'
  },
  {
    titleOfPage: 'Log in to your account',
    button1: 'Log in',
    button2: 'Register'
  }
]


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
          <Route path="*" element={<Page404 />} />

          <Route Component={LayoutAuth}>
            <Route path="/login" element={ <RegistrationAndLogin registrationAndLoginData={data2} />} />
            <Route path="/registration" element={ <RegistrationAndLogin registrationAndLoginData={data2} />} />
            <Route path="/terms" element={<TermsOfService /> } />
          </Route>

          <Route Component={LayoutAccount}>
            <Route index path="/account" element={<ContentPage />} />
          </Route>

          <Route Component={LayoutList}>
            <Route index path="/menulist" element={<BurgerList />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

