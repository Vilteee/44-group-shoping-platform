import './App.css';
import { BurgerList } from './components/burgerList/BurgerList';
import { ContentPage } from './components/contentPage/ContentPage';
import { Terms } from './components/termsPage/Terms';
import { Login }  from './components/loginPage/Login';
import { Registration }  from './components/registrationPage/Registration';
import { Feature }  from './components/featurePages/Feature';
import { HomePage }  from './components/homePage/HomePage';

const data1 = [
  {
    featurePhoto: './img/board.png',
    featureTitle: 'Choose best for You',
    featuteText: 'We offer different kinds of surfboards and their accessories depending of Your skills, body composition, surfing location properties, weather conditons',
    featureButton: 'Continue'
  },
  {
    featurePhoto: './img/mysticSuit.png',
    featureTitle: 'Suitable water wear',
    featuteText: 'You will find many tranding, quality, practical, tested hydrosuits. High class brands have stored clothes for users of all ages, sizes, individual properties.',
    featureButton: 'Continue'
  },
  {
    featurePhoto: './img/surfLifestyle.png',
    featureTitle: ' Responsible surf lifestyle apparel',
    featuteText: 'Get comfortable clothes from socks to hats appropriate for staying by the sea. All of the are made from good materials, when You nedd quick dry and warming after surfing.',
    featureButton: 'Register'
  }
]


function App() {
  return (
    <div className='app'>
        <HomePage />
        <Feature featureData={data1} />
        <Registration />
        <Login />
        <Terms />
        <ContentPage />
        <BurgerList />
    </div>
  );
}

export default App;
