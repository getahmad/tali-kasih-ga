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
import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import "font-awesome/css/font-awesome.min.css";
import "./CreateCampaign.css";

const CreateCampaign = (props) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
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
          <Form style={{ marginTop: "24px" }}>
            <Row>
              <Col>
                <ImageUploader
                  buttonText={"+"}
                  label={"Add Header Photo"}
                  {...props}
                  withIcon={true}
                  onChange={onDrop}
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
                  <Input type="select" name="select" id="exampleSelect">
                    <option disabled>Select campaign category</option>
                    <option value="">Disability</option>
                    <option value="">Medical</option>
                    <option value="">Education</option>
                    <option value="">Religious</option>
                    <option value="">Humanity</option>
                    <option value="">Environment</option>
                    <option value="">Disaster</option>
                    <option value="">Sociopreneur</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginTop: "31px" }}>
              <Col>
                <FormGroup>
                  <Label for="exampleGoal">Goal</Label>{" "}
                  <sup>
                    {" "}
                    <i
                      class="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
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
                <Button className="btn-create-campaign">CREATE CAMPAIGN</Button>
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
