import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  Button,
  Spinner,
  ModalHeader,
  Label,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";

const ModalCampaignUpdate = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [withdrawalPurpose, setWithdrawalPurpose] = useState("");
  const [errorUpdate, setErrorUpdate] = useState("");
  let { campaignId } = useParams();

  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = "https://binar8-agus-saputra.nandaworks.com/campaigns/update";
    const bodyData = {
      campaignId: campaignId,
      isWithdrawal: JSON.parse(isWithdrawal),
      withdrawalAmount: parseInt(withdrawalAmount),
      withdrawalPurpose: withdrawalPurpose,
    };
    axios
      .post(url, bodyData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        history.go(0);
      })
      .catch((err) => {
        setErrorUpdate("salahhhh");
        setLoading(false);
      });
  };

  return (
    <div>
      <span onClick={toggle} style={{ color: "#fff" }}>
        New Progress
      </span>
      <Modal isOpen={modal} toggle={toggle}>
        <div style={{ margin: "20px" }}>
          <ModalHeader toggle={toggle}>Campaign Update</ModalHeader>
          <ModalBody className="">
            <Form className="" onSubmit={handleSubmit}>
              <FormGroup tag="fieldset">
                <Row>
                  <Col>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="false"
                          onChange={(e) => setIsWithdrawal(e.target.value)}
                        />
                        Recipient update
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="true"
                          onChange={(e) => setIsWithdrawal(e.target.value)}
                        />
                        Fund withdrawal
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Amount</Label>
                <Input
                  type="number"
                  name="number"
                  id="number"
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                  placeholder="20.000.000"
                />
              </FormGroup>
              <FormGroup style={{ marginTop: "40px" }}>
                <Label for="exampleText">Text Area</Label>
                <Input
                  style={{ height: "100px" }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={(e) => setWithdrawalPurpose(e.target.value)}
                  required
                  placeholder="Tell your story..."
                />
              </FormGroup>

              <div className="d-flex justify-content-end">
                <Button type="submit" className="btn-detail-style">
                  {loading ? <Spinner color="light" /> : "Submit"}
                </Button>
              </div>

              <p style={{ textAlign: "center", color: "red" }}>{errorUpdate}</p>
            </Form>
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCampaignUpdate;
