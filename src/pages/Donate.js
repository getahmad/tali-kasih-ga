import React,{useState, useEffect} from 'react';
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
import Axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import NumberFormat from 'react-number-format';




const Donate=()=>{


    const accountNumber = "1234 5678 90";
    const accountHolder = "Tali Kasih";
    const [amount, setAmount] = useState(0)
    const[thisCampaign, setThisCampaign] = useState([])
    let[donatorName, setDonatorName] = useState("")
    const[donatorMessage, setDonatorMessage] = useState("")
    const [checked, setChecked] = useState(false)
    const userToken = Cookies.get(`token`)
    let {campaignId} = useParams()
    // let {donationId} = useParams()
 
    const handleCheckedBox = () => setChecked(!checked)

    // get campaign
    useEffect(()=>{
        Axios
        .get(`https://binar8-agus-saputra.nandaworks.com/campaigns?campaigns.id=${campaignId}`)
        .then((response)=>{
            console.log(response.data)
            // console.log(typeof response.data)
            setThisCampaign(response.data[0])
        })
    },[campaignId])


    // post donation
    const submitDonation = (e)=>{
        e.preventDefault();
        const urlPost = `https://binar8-agus-saputra.nandaworks.com/donations`
        // const urlPhoto= `https://binar8-agus-saputra.nandaworks.com/donations/photo?id=a5ad1b3b-b094-48cd-982e-1841209ada6d`
        const postDonate= {
            campaignId: campaignId,
            amount: parseInt(amount),
            name: donatorName,
            message: donatorMessage
        }
        Axios
        .post(urlPost, postDonate,{
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
        .then(response => {
            console.log(response.data)
            
        })
        
    }

        if (checked === true) {
            donatorName = document.getElementById('donation-anonim').value;
            console.log("check")
            console.log(donatorName);
        } else {
            console.log("uncheck")
        }
  


    return(
        <>
            <TopMenu/>
                <div className="container donation-form">
                    <Form  onSubmit={submitDonation} className="w-100 mb-5">
                        <h4 className="title-in-donation" >Donation</h4>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <FormGroup>
                                    <Label for="donation-amount">Amount</Label>
                                    <Input type="number" min="0" max="999999999999999999" name="total-amount" id="donation-amount" onChange={(e)=>setAmount(e.target.value)} placeholder="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="donation-donator">Name</Label>
                                    <Input type="text" name="total-amount" id="donation-donator" placeholder="Name" onChange={(e)=>setDonatorName(e.target.value)} />
                                    <FormGroup check>
                                    <Label check>
                                    
                                    <Input type="checkbox" id="donation-anonim" value="anonim"  checked={checked} onClick={handleCheckedBox} />
                                    Anonymous
                                    </Label>
                                </FormGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="donation-message">Message</Label>
                                    <Input type="textarea" name="text" id="donation-message" onChange={(e)=>setDonatorMessage(e.target.value)}/>
                                </FormGroup>
                            </div>
                            <div className="col">
                                <Card className="card-style">
                                    <CardImg top width="100%" src={thisCampaign.headerPhoto} alt="Card image cap" />
                                    <CardBody>
                                        <button className="subcategory ">{thisCampaign.category}</button>
                                        <CardTitle className="card-title">
                                        {thisCampaign.title}
                                        </CardTitle>
                                        <CardSubtitle className="card-subtitle">
                                        {thisCampaign.name}
                                        </CardSubtitle>
                                        <Progress className="progress-value" value={thisCampaign.raised} max={thisCampaign.goal} />
                                        <CardText>
                                        <Row>
                                            <Col>
                                            <p className="info-text">Raised</p>
                                            <p className="info-amount">{thisCampaign.raised}</p>
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
                                                IDR {thisCampaign.goal}
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
                                            IDR <input type="number" id="transfer-total-amount" name="transfer-total-amount" value={amount} disabled/>
                                        </div>
                                        <div className="col-6 text-right">
                                        <CopyToClipboard text={amount}>
                                            <Button className="btn btn-light">copy</Button>
                                        </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 p-4 mt-4">
                                    <p className="transfer-to-text">Upload Transfer</p>
                                    Select image to upload: <br/>
                                    <input type="file" name="transferUpload" id="transferUpload"></input>
                                </div>
                            </FormGroup>
                            <div className="text-right ">
                                <Button  className="btn-detail-style" type="submit">Submit</Button>
                            </div>
                        </div>                          
                    </Form>
                </div>
            <Footer/>
        </>
    )

}

export default Donate;