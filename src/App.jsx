import "./index.css";
import Cards from "./components/cards/Cards";
import Header from "./components/hero/Header";
import CraterBenefits from "./components/why-crater/CraterBenifits";
import Users from "./components/users/Users";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Cards />
      <CraterBenefits />
      <Users />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
