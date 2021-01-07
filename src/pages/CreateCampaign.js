import {
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./CreateCampaign.css";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import ICPlus from "./images/ic-plus.png";
import NumberFormat from "react-number-format";

const CreateCampaign = (props) => {
  const [headerPhoto, setHeaderPhoto] = useState({ preview: "", raw: "" });
  const [storyImage, setStoryImage] = useState({ preview: "", raw: "" });
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState(0);
  const [dueDate, setDueDate] = useState(null);
  const [storyText, setStoryText] = useState("");
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlCategory = "https://binar8-agus-saputra.nandaworks.com/categories";
    Axios.get(urlCategory, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleImageHeader = (e) => {
    if (e.target.files.length) {
      setHeaderPhoto({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleImageStory = (e) => {
    if (e.target.files.length) {
      setStoryImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("header", headerPhoto.raw);
    formdata.append("story", storyImage.raw);
    formdata.append("categoryId", categoryId);
    formdata.append("title", title);
    formdata.append("goal", parseInt(goal));
    formdata.append("storyText", storyText);
    formdata.append("dueDate", dueDate);
    const urlCreateCampaign =
      "https://binar8-agus-saputra.nandaworks.com/new/campaigns";
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    Axios.post(urlCreateCampaign, formdata, config)
      .then((res) => {
        // console.log(res.data);
        history.push("/discover");
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
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
              <Col className="style-bg-image d-flex justify-content-center lg-12">
                <label htmlFor="upload-button">
                  {headerPhoto.preview ? (
                    <img
                      src={headerPhoto.preview}
                      alt="dummy"
                      style={{ padding: "30px" }}
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="style-upload-image">
                      <img src={ICPlus} alt="" />
                      <h1 className="text-center mt-5">
                        Add Header Photo
                        <sup>
                          <i
                            className="fa fa-asterisk"
                            style={{ fontSize: "20px", color: "#A43F3C" }}
                          ></i>
                        </sup>
                      </h1>
                    </div>
                  )}
                </label>
                <input
                  required
                  type="file"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={handleImageHeader}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
              <Col lg={6} xs={6}>
                <FormGroup>
                  <Label for="exampletext">Title</Label>{" "}
                  <sup>
                    <i
                      className="fa fa-asterisk"
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
              <Col lg={6} xs={6}>
                <FormGroup>
                  <Label for="exampleSelect">Category</Label>{" "}
                  <sup>
                    <i
                      className="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
                    required
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    <option value="" selected disabled>
                      Please select
                    </option>
                    {data.map((data) => (
                      <option value={data.id}>{data.category}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginTop: "31px" }}>
              <Col lg={6} xs={6}>
                <FormGroup>
                  <Label for="exampleGoal">Goal</Label>
                  <sup>
                    <i
                      className="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <br />

                  <NumberFormat
                    allowNegative={false}
                    className="input-campaign"
                    thousandSeparator={true}
                    prefix={"IDR "}
                    placeholder="e.g. 20,000,000"
                    onValueChange={(values) => {
                      setGoal(values.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={6}>
                <FormGroup>
                  <Label for="exampleDate">Due date </Label>
                  <sup>
                    <i
                      className="fa fa-asterisk"
                      style={{ fontSize: "8px", color: "#A43F3C" }}
                    ></i>
                  </sup>
                  <Input
                    onChange={(e) => setDueDate(e.target.value)}
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                    required
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

            <Label className="mt-3 ">Story Image</Label>
            <sup>
              <i
                className="fa fa-asterisk"
                style={{ fontSize: "8px", color: "#A43F3C" }}
              ></i>
            </sup>
            <Row>
              <Col className="d-flex justify-content-center lg-12 style-story-image">
                <div>
                  <div>
                    <label htmlFor="upload-image-story">
                      {storyImage.preview ? (
                        <img
                          src={storyImage.preview}
                          alt="dummy"
                          style={{ padding: "30px" }}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <div className="style-text-story-image mt-5 mb-5">
                          <img src={ICPlus} alt="" />
                          <h1 className="mt-3">
                            Add other photo
                            <sup>
                              <i
                                className="fa fa-asterisk"
                                style={{ fontSize: "15px", color: "#A43F3C" }}
                              ></i>
                            </sup>
                          </h1>
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-image-story"
                      style={{ display: "none" }}
                      onChange={handleImageStory}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button className="btn-create-campaign" type="submit">
                  {loading ? <Spinner color="light" /> : "CREATE CAMPAIGN"}
                </Button>
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
