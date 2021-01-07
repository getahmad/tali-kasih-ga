import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import "./admin.css";
import Axios from "axios";
import Cookies from "js-cookie";
import classnames from "classnames";
import dateFormat from "dateformat";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useHistory } from "react-router";

const Admin = () => {
  const [dataPayment, setDataPayment] = useState([]);

  useEffect(() => {
    const urlGetDataPayment =
      "https://binar8-agus-saputra.nandaworks.com/admin/donations";
    Axios.get(urlGetDataPayment, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      setDataPayment(res.data);
    });
  }, []);

  const [idPayment, setIdPayment] = useState("");
  const [isPaidPayment, setIsPaidPayment] = useState(false);
  const history = useHistory();
  const handleApprove = (e) => {
    e.preventDefault();
    const urlApprovePayment =
      "https://binar8-agus-saputra.nandaworks.com/admin/donations";
    const bodyDataApprove = {
      id: idPayment,
      isPaid: JSON.parse(isPaidPayment),
    };
    Axios.patch(urlApprovePayment, bodyDataApprove, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      history.go(0);
    });
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <TopMenu />
      <Container className="container-admin">
        <div className="border-admin">
          <div style={{ margin: "30px" }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  All Payments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Approve Payment
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h1
                      style={{ textAlign: "center", margin: "30px" }}
                      className="subtitle"
                    >
                      All Payments
                    </h1>

                    <Table size="md" striped>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Proof</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataPayment.map((dataPayment) => (
                          <tr>
                            <td>
                              <CopyToClipboard text={dataPayment.id}>
                                <Button className="btn btn-light">copy</Button>
                              </CopyToClipboard>
                            </td>
                            <td>
                              {dateFormat(
                                `${dataPayment.createdAt}`,
                                "mmmm dS, yyyy"
                              )}
                            </td>
                            <td>{dataPayment.name}</td>
                            <td> IDR {formatRupiah(dataPayment.amount)}</td>
                            <td>
                              <a
                                href={dataPayment.paymentPhoto}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                check
                              </a>
                            </td>
                            <td>
                              {dataPayment.isPaid === 1 ? (
                                <p class="text-success">Finished</p>
                              ) : (
                                <p class="text-danger">Pending</p>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <h1
                      style={{ textAlign: "center", margin: "30px 0" }}
                      className="subtitle"
                    >
                      Approve Payment
                    </h1>
                    <div
                      style={{
                        margin: "0 250px",
                        border: "1px solid #E1E0E0",
                        borderRadius: "10px",
                      }}
                    >
                      <Form onSubmit={handleApprove} style={{ margin: "10px" }}>
                        <FormGroup style={{ marginTop: "40px" }}>
                          <Input
                            className="form-style"
                            type="text"
                            placeholder="Input Id Payment"
                            onChange={(e) => setIdPayment(e.target.value)}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            required
                            type="select"
                            name="select"
                            id="exampleSelect"
                            onChange={(e) => setIsPaidPayment(e.target.value)}
                          >
                            <option value="true" disabled selected>
                              select
                            </option>
                            <option value="true">Approve</option>
                            <option value="false">Cancel</option>
                          </Input>
                        </FormGroup>
                        <Col className="d-flex justify-content-end">
                          <Button type="submit" className="btn-approve">
                            Save
                          </Button>
                        </Col>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
