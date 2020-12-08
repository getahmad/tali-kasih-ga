import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import CardCampaign from "./CardCampaign";
import Loading from "./Loading";
import "./newtopic.css";

const NewTopic = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      // const url ="https://5fad36562ec98b0016048033.mockapi.io/allcampaign"
      const url = `http://ec2-54-251-3-103.ap-southeast-1.compute.amazonaws.com/homepage`
      Axios.get(url)
      .then((res)=>{
        setData(res.data)
        console.log(res.data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Container>
        <p className="title">New</p>
        <h1 className="subtitle">The latest people who need your help</h1>
        <Row style={{ marginBottom: "70px" }}>
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" /> } 
            {!loading && <CardCampaign data={data.slice(0,3)}/>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewTopic;
