import Header from "../../components/header/Header";
import Banner from "./Banner";
import "animate.css";
import PauseOnHover from "./Slider";
import List from "./List";
import Sale from "./Sale";
import Support from "../../components/footer/Support";
import Footer from "../../components/footer/Footer";
import Collection from "./Collection";
import "./Home.css"
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <List />
      <PauseOnHover />
      <Collection />
      <Sale />
      <Support />

      <Footer />
    </div>
  );
}
