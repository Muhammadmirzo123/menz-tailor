  import Feedback from "./commponents/Feedback/Feedback.jsx";
import Footer from "./commponents/Footer/Footer.jsx";
import Header from "./commponents/Header/Header.jsx"
import Hero from './commponents/Hero/Hero.jsx'
import History from "./commponents/History/History.jsx";
import Offer from './commponents/Offer/Offer.jsx';
import Location from "./commponents/Location/Location.jsx";
import Quote from "./commponents/Quote/Quote.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offer />
      <History />
      <Feedback />
      <Location />
      <Quote /> 
      <Footer />
    </div>
  );
}

export default App;

