import logo from './assets/img/logo.png';
import bubble from './assets/img/bubble.png';
import burger1 from './assets/img/burger1.png';
import Todayspecialimg from './assets/img/Todayspecialimg.png';
import donut from './assets/img/donut.png';
import honney from './assets/img/honney.png';
import macaron from './assets/img/macaron.png';
import dinner from './assets/img/dinner.png';
import food1 from './assets/img/food1.png';
import food2 from './assets/img/food2.png';
import food3 from './assets/img/food3.png';
import food4 from './assets/img/food4.png';
import food5 from './assets/img/food5.png';
import food6 from './assets/img/food6.png';
import offerimg from './assets/img/offerimg.png';
import customer1 from './assets/img/customer1.png';
import customer2 from './assets/img/customer2.png';
import customer3 from './assets/img/customer3.png';
import customer4 from './assets/img/customer4.png';
import border from './assets/img/border.png';
import line2 from './assets/img/line2.png';
import line3 from './assets/img/line3.png';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import SpecialSectionComponent from './components/SpecialSectionComponent';
import HomeServicesComponent from './components/HomeServicesComponent';
import MenuComponent from './components/MenuComponent';
import OfferComponent from './components/OfferComponent';
import TestyComponent from './components/TestyComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
    <HeaderComponent logo={logo} status={'Open Now'} schedule={'8AM - 10PM'} telephone={'+2 364 98 672'} />

    <HeroComponent bubble={bubble} burger1={burger1} />

    <SpecialSectionComponent Todayspecialimg = {Todayspecialimg} donut = {donut} />

    <HomeServicesComponent honney={honney} macaron={macaron} dinner={dinner} />
 
    <MenuComponent food1 = {food1} food2 = {food2} food3 = {food3} food4 = {food4} food5 = {food5} food6 = {food6}/>
    
    <OfferComponent offerimg = {offerimg} />

    <TestyComponent />

    <FooterComponent logo={logo} line2 = {line2} line3 = {line3}/>

    </>
  );
}

export default App;
