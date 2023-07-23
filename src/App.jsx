import './App.css';
import Ourpromisses from './components/weprovide/Ourpromisses';
import Fotter from './components/footer/Fotter';
import Header from './components/header/Header';
import Faqlist from './components/faq/Faqlist';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div className="App">
        <Header />
        <Checkout />
        <Faqlist />
        <Ourpromisses/>
        <Fotter />
    </div>
  );
}

export default App;
