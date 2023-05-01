import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero/Hero.js";
import Programs from "./components/Programs/Programs.js";
import Reasons from "./components/Reasons/Reasons.js";
import Plans from "./components/Plans/Plans.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Join from "./components/Join/Join.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
