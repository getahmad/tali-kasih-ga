import React from "react";
import { Container, Table, Input } from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import "./admin.css";

const Admin = () => {
  return (
    <>
      <TopMenu />
      <Container className="container-admin">
        <div className="border-admin">
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            Pending Campaign
          </h1>
          <div style={{ margin: "30px" }}>
            <Table size="md" striped>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Goal</th>
                  <th>Due Date</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="" disabled selected>
                        Setting
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="" disabled selected>
                        Setting
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
