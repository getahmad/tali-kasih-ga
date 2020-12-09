import { Container } from "reactstrap";
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer"


const DiscoverCategory = () => {
  return (
    <>
      <TopMenu/>
      <Container style={{paddingTop:"80px"}}>
        <h1>ini Discover Category</h1>
      </Container>
      <Footer/>
    </>
  );
};

export default DiscoverCategory;
