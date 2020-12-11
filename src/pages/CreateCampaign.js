import {
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import "font-awesome/css/font-awesome.min.css";
import "./CreateCampaign.css";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";

const CreateCampaign = (props) => {
  // const [headerPhotos, setHeaderPhotos] = useState("https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg");
  // const onDrop = (headerPhoto) => {
  //   setHeaderPhotos([...headerPhotos, headerPhoto]);
  // };
  const [headerPhoto]=useState("https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg");
  const [storyImage]=useState("https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg");
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState(0);
  const [dueDate, setDueDate] = useState(null);
  const [storyText, setStoryText] = useState("");
  let history = useHistory();

  useEffect(() => {
    const urlCategory =
      "https://binar8-agus-saputra.nandaworks.com/categories";
    Axios.get(urlCategory, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://binar8-agus-saputra.nandaworks.com/campaigns";

    const bodyData = {
      categoryId: categoryId,
      headerPhoto: headerPhoto,
      title: title,
      goal: parseInt(goal),
      dueDate: dueDate,
      storyText: storyText,
      storyImage:storyImage,
    };
    Axios.post(url, bodyData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      history.push("/discover");
    });
  };

  return (
    <>
      <TopMenu />
      <Container style={{ marginTop: "105px" }}>
        <div className="container-form">
          <h1 className="subtitle" style={{ marginBottom: "24px" }}>
            Create Campaign
          </h1>
          <hr />
          <Form style={{ marginTop: "24px" }} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <ImageUploader
                  buttonText={"+"}
                  label={"Add Header Photo"}
                  {...props}
                  withIcon={true}
                  // onChange={onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  withPreview={true}
                  singleImage={true}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
              <Col>
                <FormGroup>
                  <Label for="exampletext">Title</Label>{" "}
                  <sup>
                    <i
                      class="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="input-campaign"
                    type="text"
                    name="text"
                    id="exampletext"
                    placeholder="e.g. Help we get clean water"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleSelect">Category</Label>{" "}
                  <sup>
                    <i
                      class="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    <option disabled></option>
                    {data.map((data) => (
                      <option value={data.id}>{data.category}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginTop: "31px" }}>
              <Col>
                <FormGroup>
                  <Label for="exampleGoal">Goal</Label>{" "}
                  <sup>
                    <i
                      class="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
                    onChange={(e) => setGoal(e.target.value)}
                    required
                    type="number"
                    name="number"
                    id="exampleGoal"
                    placeholder="e.g. 20000000"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleDate">Due date (Optional)</Label>
                  <Input
                    onChange={(e) => setDueDate(e.target.value)}
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginTop: "56px" }}>
              <Col>
                <FormGroup>
                  <Label for="exampleText">Story</Label>
                  <Input
                    onChange={(e) => setStoryText(e.target.value)}
                    style={{ height: "200px" }}
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Tell your story..."
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button className="btn-create-campaign" type="submit">CREATE CAMPAIGN</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CreateCampaign;
