import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less"; 
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import ICampaignDetail from "../components/images/campaign-detail.png";
import ICampaignDetailUser from "../components/images/campaign-user.png";
import ICampaignDetailDonator from "../components/images/campaign-donator.png";
import Medical from "../components/images/medical.png";
import {Timeline, TimelineEvent} from "react-event-timeline";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import "./campaigndetail.css";

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tempor est. Nulla bibendum hendrerit nibh, et pretium magna venenatis eget. 
Morbi sodales sit amet diam non sagittis. Aenean porttitor venenatis hendrerit. Nulla facilisi. Duis euismod, metus nec viverra tempor, lorem justo posuere felis, et elementum metus nibh ut orci. Curabitur arcu lectus, sagittis sit amet sem eu, fermentum volutpat magna. Phasellus cursus, quam sit amet convallis condimentum, nulla tellus consequat eros, in vehicula lorem libero sed mi. Donec lobortis quam nec lorem sagittis mollis. Suspendisse vestibulum facilisis diam a dapibus. Proin vel diam nec dolor suscipit suscipit eu quis eros. Integer ut vulputate turpis, eu maximus metus. Integer pulvinar, est quis fringilla pretium, eros orci tristique lectus, auctor semper neque elit congue risus. 
Phasellus et turpis quis velit sollicitudin sagittis eget et enim. Curabitur congue justo non mi semper, quis sagittis nibh rhoncus. Aliquam erat volutpat. Maecenas vehicula eleifend diam sit amet tempor. Maecenas vestibulum enim justo, nec molestie quam semper eget. Morbi laoreet dolor vel nunc pellentesque semper. Aliquam ullamcorper et metus posuere pharetra. Donec vel eleifend diam. Mauris iaculis odio non odio accumsan, sed euismod arcu tristique. Duis dapibus aliquam lorem, non mollis magna aliquam auctor. Mauris at ante mattis, volutpat erat in, tincidunt nibh. Mauris ligula nulla, malesuada eu ipsum quis, dictum accumsan nulla. Vestibulum venenatis hendrerit orci, sed volutpat magna tincidunt ut. Integer sit amet mi ac leo sollicitudin facilisis sit amet sed quam. Praesent iaculis vel nisi eget hendrerit. Nam nec nibh eu velit tempor porttitor eget porta eros. Quisque tincidunt nulla lacus, ut fringilla leo feugiat eu. Integer lacinia nibh lacus, ut porttitor lacus condimentum in. Aenean aliquet ligula nibh, in convallis ante sagittis ac. Duis id justo aliquet, feugiat dolor eget, auctor nisl. Sed dictum nunc sed nunc sodales, vitae tincidunt magna dictum. Vivamus tempus luctus nulla pretium porta. Aliquam eu mauris rutrum, commodo odio in, accumsan urna. Nullam dignissim tincidunt sollicitudin. Suspendisse tincidunt massa sit amet sodales cursus.`


const CampaignDetail=()=>{
    return(
        <>
            <TopMenu/>
            <div className="container">
                <div className="campaign-detail-title">
                    <h4>campaign title</h4>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div>
                        <img className="img-campaign-detail" src={ICampaignDetail} alt="" />     
                        </div>
                    </div>
                    <div className="col-5">
                        <Card className="campaign-detail-info">
                            <CardBody>
                                <CardText>
                                    <p className="total-donation">IDR 30.000.000</p>
                                    <p className="target-donation">from IDR 50.000.000</p>
                                </CardText>
                                <Progress className="progress-value" value={75} max={100} />
                                <div className="row">
                                    <div className="col-2 user-image">
                                        <img src={ICampaignDetailUser} alt=""/>
                                    </div>
                                    <div className="col-8 user-info">
                                        <p className="user-name">Dian Endang</p>
                                        <p className="user-status">Fundraiser</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col campaign-donation-info">
                                        <Card>
                                            <CardText>
                                                <p className="campaign-donation-info-number">12</p>
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
                                <Button className="share-campaign-button" outline color="info" block>SHARE</Button>
                                <Button className="donate-campaign-button" color="danger" block><Link to="/campaign/campaign-detail/donate">DONATE</Link></Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
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

                <div className="custom-card campaign-updates my-5 py-4 px-3">
                    <div className="container">
                        <div className="title mt-3">Updates</div>
                        <div className="content-updates">
                        <Timeline>
                            <TimelineEvent
                                title="Withdraw"
                                createdAt="2016-09-12 10:06 PM"
                            >
                                Rp. 20,000,000
                                Withdrawal purpose: pay surgery bill
                            </TimelineEvent>
                            <TimelineEvent
                                title="Withdraw"
                                createdAt="2016-09-11 09:06 AM"
                            >
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. Sagittis quisque non, nullam facilisis. Tempus cras nibh vitae vitae. Risus gravida arcu non a rhoncus suscipit a eu ultrices. Vestibulum, ut cursus pellentesque turpis ipsum arcu congue. Sit arcu, non gravida praesent turpis varius. Phasellus morbi donec pulvinar nisi ac augue at duis dolor. Sed ut hendrerit neque nunc accumsan ac massa. Nullam scelerisque aliquet diam laoreet lorem.
                            </TimelineEvent>
                        </Timeline>
                        </div>
                    </div>
                </div>

                <div className="custom-card campaign-donations my-5 py-4 px-3">
                    <div className="container">
                        <div className="title mt-3">Donations</div>
                        <div className="content-donations">
                            <div className="row">
                                <div className=" custom-card-donation pt-3 mb-3 col-5">
                                    <div className="row">
                                        <div className="col-3 user-image">
                                            <img src={ICampaignDetailDonator} alt=""/>
                                        </div>
                                        <div className="col-8 user-info">
                                            <p className="user-donation">Rp. 320.000</p>
                                            <p className="user-name">Justin Junaedi</p>
                                            <p className="donate-time">12 minutes</p>
                                        </div>
                                    </div>
                                    <div className="user-comments">
                                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod distinctio nulla magnam fugit quibusdam repellendus quia soluta, aperiam voluptatibus ipsum eius dicta illum reiciendis laudantium unde a ipsa laborum perferendis!"</p>
                                    </div>
                                </div>
                                <div className=" custom-card-donation pt-3 mb-3 col-5">
                                    <div className="row">
                                        <div className="col-3 user-image">
                                            <img src={ICampaignDetailDonator} alt=""/>
                                        </div>
                                        <div className="col-8 user-info">
                                            <p className="user-donation">Rp. 320.000</p>
                                            <p className="user-name">Justin Junaedi</p>
                                            <p className="donate-time">12 minutes</p>
                                        </div>
                                    </div>
                                    <div className="user-comments">
                                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod distinctio nulla magnam fugit quibusdam repellendus quia soluta, aperiam voluptatibus ipsum eius dicta illum reiciendis laudantium unde a ipsa laborum perferendis!"</p>
                                    </div>
                                </div>
                                <div className=" custom-card-donation pt-3 mb-3 col-5">
                                    <div className="row">
                                        <div className="col-3 user-image">
                                            <img src={ICampaignDetailDonator} alt=""/>
                                        </div>
                                        <div className="col-8 user-info">
                                            <p className="user-donation">Rp. 320.000</p>
                                            <p className="user-name">Justin Junaedi</p>
                                            <p className="donate-time">12 minutes</p>
                                        </div>
                                    </div>
                                    <div className="user-comments">
                                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod distinctio nulla magnam fugit quibusdam repellendus quia soluta, aperiam voluptatibus ipsum eius dicta illum reiciendis laudantium unde a ipsa laborum perferendis!"</p>
                                    </div>
                                </div>
                                <div className=" custom-card-donation pt-3 mb-3 col-5">
                                    <div className="row">
                                        <div className="col-3 user-image">
                                            <img src={ICampaignDetailDonator} alt=""/>
                                        </div>
                                        <div className="col-8 user-info">
                                            <p className="user-donation">Rp. 320.000</p>
                                            <p className="user-name">Justin Junaedi</p>
                                            <p className="donate-time">12 minutes</p>
                                        </div>
                                    </div>
                                    <div className="user-comments">
                                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod distinctio nulla magnam fugit quibusdam repellendus quia soluta, aperiam voluptatibus ipsum eius dicta illum reiciendis laudantium unde a ipsa laborum perferendis!"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Button className="load-more-donator" outline color="info">LOAD MORE</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-card donator-comments my-5 py-4 px-3">
                    <div className="container">
                        <div className="title">Comments</div>
                        <div className="donator-comments text-center mx-auto mb-5">
                            <textarea name="comment-text" id="user-comment" placeholder="Give them support..." cols="30" rows="10"></textarea>
                            <div className="text-right">
                                <Button className="post-comment" color="danger">POST</Button>
                            </div>
                        </div>
                        <div className="campaign-comments text-left">
                            <div className="comments-card">
                                <div className="row">
                                    <div className="col-1 user-image">
                                        <img src={ICampaignDetailDonator} alt=""/>
                                    </div>
                                    <div className="col-5 user-info">
                                        <p className="user-name">Justin Junaedi</p>
                                        <p className="comments-time">12 minutes</p>
                                    </div>
                                </div>
                                <div className="comment-content mt-3">
                                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi sapiente ad voluptates veritatis. Obcaecati in ipsa mollitia amet nesciunt similique quam iure ex, dolorum, ducimus, corrupti possimus quos esse!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="campaign-comments text-left">
                            <div className="comments-card">
                                <div className="row">
                                    <div className="col-1 user-image">
                                        <img src={ICampaignDetailDonator} alt=""/>
                                    </div>
                                    <div className="col-5 user-info">
                                        <p className="user-name">Justin Junaedi</p>
                                        <p className="comments-time">12 minutes</p>
                                    </div>
                                </div>
                                <div className="comment-content mt-3">
                                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi sapiente ad voluptates veritatis. Obcaecati in ipsa mollitia amet nesciunt similique quam iure ex, dolorum, ducimus, corrupti possimus quos esse!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="campaign-comments text-left">
                            <div className="comments-card">
                                <div className="row">
                                    <div className="col-1 user-image">
                                        <img src={ICampaignDetailDonator} alt=""/>
                                    </div>
                                    <div className="col-5 user-info">
                                        <p className="user-name">Justin Junaedi</p>
                                        <p className="comments-time">12 minutes</p>
                                    </div>
                                </div>
                                <div className="comment-content mt-3">
                                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi sapiente ad voluptates veritatis. Obcaecati in ipsa mollitia amet nesciunt similique quam iure ex, dolorum, ducimus, corrupti possimus quos esse!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="campaign-comments text-left">
                            <div className="comments-card">
                                <div className="row">
                                    <div className="col-1 user-image">
                                        <img src={ICampaignDetailDonator} alt=""/>
                                    </div>
                                    <div className="col-5 user-info">
                                        <p className="user-name">Justin Junaedi</p>
                                        <p className="comments-time">12 minutes</p>
                                    </div>
                                </div>
                                <div className="comment-content mt-3">
                                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi sapiente ad voluptates veritatis. Obcaecati in ipsa mollitia amet nesciunt similique quam iure ex, dolorum, ducimus, corrupti possimus quos esse!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button className="load-more-comments" outline color="info">LOAD MORE</Button>
                    </div>
                </div>

                <div className="related-campaign background-biru my-5 py-4 px-3">
                    <div className="container">
                        <div className="title mt-3">Related Campaign</div>
                        <div className="row">
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
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CampaignDetail;