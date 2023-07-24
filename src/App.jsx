import './App.css';
import { BurgerList } from './components/burgerList/BurgerList';
import { ContentPage } from './components/contentPage/ContentPage';
import { Terms } from './components/termsPage/Terms';
import { Login }  from './components/loginPage/Login';
import { Registration }  from './components/registrationPage/Registration';
import { Feature }  from './components/featurePages/Feature';
import { HomePage }  from './components/homePage/HomePage';


function App() {
  return (
    <div className='app'>
        <HomePage />
        <Feature />
        <Registration />
        <Login />
        <Terms />
        <ContentPage />
        <BurgerList />

    </div>
  );
}

export default App;
