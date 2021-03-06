import CarouselHomepage from "../components/CarouselHomepage";
import MoreInfo from "../components/MoreInfo";
import NewTopic from "../components/NewTopic";
import TrendingTopic from "../components/TrendingTopic";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";

const Home = () => {
  return (
    <div>
      <TopMenu />
      <CarouselHomepage />
      <TrendingTopic />
      <NewTopic />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Home;
