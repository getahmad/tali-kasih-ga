import React,{useState} from 'react';
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import bankTransferImg from "../components/images/donation-bank.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
Card, 
CardText,
CardImg,
CardTitle,
CardSubtitle,
CardBody,
Progress,
Button,
Row,
Col,
Form,
FormGroup,
Label,
Input,
} from "reactstrap";
import Medical from "../components/images/medical.png";
import "./donate.css";


const Donate=()=>{
    const accountNumber = "1234 5678 90";
    const accountHolder = "Tali Kasih";
    const transferAmount = "20000000";

    return(
        <>
            <TopMenu/>
                <div className="container donation-form">
                    <Form className="w-100 mb-5" style={{padding:"0 100px"}}>
                        <h4 className="title-in-donation" >Donation</h4>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <FormGroup>
                                    <Label for="donation-amount">Amount</Label>
                                    <Input type="number" min="0" max="999999999999999999" name="total-amount" id="donation-amount" placeholder="Total Amount" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="donation-donator">Name</Label>
                                    <Input type="text" name="total-amount" id="donation-donator" placeholder="Name" />
                                    <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" />
                                    Anonymous
                                    </Label>
                                </FormGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="donation-message">Message</Label>
                                    <Input type="textarea" name="text" id="donation-message" />
                                </FormGroup>
                            </div>
                            <div className="col">
                                <Card className="card-style">
                                    <CardImg top width="100%" src={Medical} alt="Card image cap" />
                                    <CardBody>
                                        <button className="subcategory ">Medical</button>
                                        <CardTitle className="card-title">
                                        Aid for necessary items to help our country
                                        </CardTitle>
                                        <CardSubtitle className="card-subtitle">
                                        Aksi Cepat Tanggap
                                        </CardSubtitle>
                                        <Progress className="progress-value" value={75} max={100} />
                                        <CardText>
                                        <Row>
                                            <Col>
                                            <p className="info-text">Raised</p>
                                            <p className="info-amount">IDR 30.000.000</p>
                                            </Col>
                                            <Col>
                                            <p style={{ textAlign: "right" }} className="info-text">
                                                Goal
                                            </p>
                                            <p
                                                style={{
                                                textAlign: "right",
                                                fontSize: "14px",
                                                color: "black",
                                                }}
                                            >
                                                IDR 50.000.000
                                            </p>
                                            </Col>
                                        </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="mt-4 justify-content-end">
                            <h4>Payment</h4>
                            <hr/>
                            <FormGroup>
                                <Label for="donation-payment">Payment option</Label>
                                <div className="payment-bank text-center">
                                    <img src={bankTransferImg} alt=""/>
                                    <p className="mt-2 mb-0">Bank Transfer</p>
                                </div>
                                <div className="transfer-to col-6 p-4 mt-4">
                                    <p className="transfer-to-text">Transfer to</p>
                                    <div className="row">
                                        <div className="transfer-to-info col-12">Account Number</div>
                                        <div className="col-6 mt-1">
                                            <input type="text" id="account-number" name="account-number" value={accountNumber} disabled/>
                                        </div>
                                        <div className="col-6 text-right">
                                        <CopyToClipboard text={accountNumber}>
                                            <Button className="btn btn-light">copy</Button>
                                        </CopyToClipboard>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="transfer-to-info col-12">Account Holder Name</div>
                                        <div className="col-6 mt-1">
                                            <input type="text" id="account-holder" name="account-holder" value={accountHolder} disabled/>    
                                        </div>
                                        <div className="col-6 text-right">
        
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="transfer-to-info col-12">Total Amount</div>
                                        <div className="col-6 mt-1">
                                            <input type="text" id="transfer-total-amount" name="transfer-total-amount" value={transferAmount} disabled/>
                                        </div>
                                        <div className="col-6 text-right">
                                        <CopyToClipboard text={transferAmount}>
                                            <Button className="btn btn-light">copy</Button>
                                        </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                            </FormGroup>
                            <div className="text-right ">
                                <Button  className="btn-detail-style">Submit</Button>
                            </div>
                        </div>                          
                    </Form>
                </div>
            <Footer/>
        </>
    )
}

export default Donate;