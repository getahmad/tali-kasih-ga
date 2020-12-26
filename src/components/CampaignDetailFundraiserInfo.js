import React, { useEffect, useState } from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less"; 
import ICampaignDetailUser from "./images/campaign-user.png";
import ICampaignDetailSetting from "./images/setting.png"
import {  useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
Card, 
CardText,
CardBody,
Progress,
Button,
Modal, ModalBody,
ModalHeader,Input
} from "reactstrap";
import Axios from 'axios';
import ModalCampaignUpdate from './ModalCampaignUpdate';





const CampaignDetailFundraiserInfo =()=>{

    // ambil user token untuk dapat user id
    // samakan id user dengan id user dari campaign, jika sama maka menu berubah menjadi campaign detail fundraiser 

    const [campaignDetail, setCampaignDetail] = useState([])
    let {campaignId} = useParams()
    let longText = `${campaignDetail.storyText}`
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const urlNowWeb = window.location.href;

    // get campaign
    useEffect(()=>{
        Axios
        .get(`https://binar8-agus-saputra.nandaworks.com/campaigns?campaigns.id=${campaignId}`)
        .then(response=>
            {
                console.log(response.data)
                setCampaignDetail(response.data[0])
            }
        )
    },[campaignId])

    // delete campaign
    // end of delete campaign

    
    return(
    <div>
        <div className="row campaign-detail-title">
            <div className="col-10">
            <h4>{campaignDetail.title}</h4>
            </div>
            <div className="text-right col-2">
            <div class="dropdown">
                <Button color="none" className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={ICampaignDetailSetting} alt="campaign-setting"/>
                </Button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Edit</a>
                    <a className="dropdown-item" href="/">Close Campaign</a>
                    <a className="dropdown-item" style={{color: `red`}} href="/">Delete</a>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-7">
                <div>
                <img className="img-campaign-detail" src={campaignDetail.headerPhoto} alt="" />     
                </div>
            </div>
            <div className="col-lg-5">
                <Card className="campaign-detail-info">
                    <CardBody>
                        <CardText>
                            <p className="total-donation">IDR {campaignDetail.raised == null? 0 : campaignDetail.raised}</p>
                            <p className="target-donation">from IDR {campaignDetail.goal}</p>
                        </CardText>
                        <Progress className="progress-value" value={campaignDetail.raised} max={campaignDetail.goal} />
                        <div className="row">
                            <div className="col-2 user-image">
                                <img src={ICampaignDetailUser} alt=""/>
                            </div>
                            <div className="col-8 user-info">
                                <p className="user-name">{campaignDetail.name}</p>
                                <p className="user-status">Fundraiser</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col campaign-donation-info">
                                <Card>
                                    <CardText>
                                        <p className="campaign-donation-info-number">{campaignDetail.dueDate == null? 10 : campaignDetail.dueDate }</p>
                                        <p className="campaign-donation-info-detail">Days left</p>
                                    </CardText>
                                </Card>
                            </div>
                            <div className="col campaign-donation-info">
                                <Card>
                                    <CardText>
                                        <p className="campaign-donation-info-number">132</p>
                                        <p className="campaign-donation-info-detail">Donations</p>
                                    </CardText>
                                </Card>
                            </div>
                            <div className="col campaign-donation-info">
                                <Card>
                                    <CardText>
                                        <p className="campaign-donation-info-number">232</p>
                                        <p className="campaign-donation-info-detail">Shares</p>
                                    </CardText>
                                </Card>
                            </div>
                        </div>
                        <Button className="share-campaign-button" outline color="info" onClick={toggle} block>SHARE</Button>
                        <Button className="donate-campaign-button btn-detail-style"  block> <ModalCampaignUpdate/> </Button>
                    </CardBody>
                </Card>
            </div>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Share</ModalHeader>
        <ModalBody>
            <div className="row">
                <div className="col-7">
                <Input value={urlNowWeb} />
                </div>

                <div className="col-3">
                <CopyToClipboard text={urlNowWeb}>
                    <Button color="danger" block>Copy</Button>
                </CopyToClipboard>
                </div>  
            </div>           
        </ModalBody>
        </Modal>

        <div className="the-story background-biru my-5 py-4">
            <div className="content">
                <div className="content-title mt-3">The Story</div>
                <div className="content-text">
                    <ReactReadMoreReadLess
                        charLimit={500}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {longText}
                        
                    </ReactReadMoreReadLess>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CampaignDetailFundraiserInfo;