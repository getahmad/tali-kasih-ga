import React, { useEffect, useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ICampaignDetailUser from "./images/campaign-user.png";
import { Link, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Card,
  CardText,
  CardBody,
  Progress,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
} from "reactstrap";
import Axios from "axios";

const CampaignDetailInfo = () => {
  const [campaignDetail, setCampaignDetail] = useState([]);
  let { campaignId } = useParams();
  let longText = `${campaignDetail.storyText}`;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const urlNowWeb = window.location.href;

  const targetTime = new Date(campaignDetail.dueDate).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns?campaigns.id=${campaignId}`
    ).then((response) => {
      // console.log(response.data);
      setCampaignDetail(response.data[0]);
    });
  }, [campaignId]);

  const [campaignDonation, setCampaignDonation] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/donations?campaignId=${campaignId}`
    )
      .then((response) => {
        setCampaignDonation(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [campaignId]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };

  return (
    <div>
      <div className="campaign-detail-title">
        <h4>{campaignDetail.title}</h4>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div>
            <img
              className="img-campaign-detail"
              src={campaignDetail.headerPhoto}
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-5">
          <Card className="campaign-detail-info">
            <CardBody>
              <CardText>
                <p
                  className="total-donation"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#A43F3C",
                  }}
                >
                  IDR &nbsp;
                  {campaignDetail.raised == null
                    ? 0
                    : formatRupiah(campaignDetail.raised)}
                </p>
                <p className="target-donation">
                  from IDR {formatRupiah(campaignDetail.goal)}
                </p>
              </CardText>
              <Progress
                className="progress-value"
                value={campaignDetail.raised}
                max={campaignDetail.goal}
              />
              <div className="row">
                <div className="col-2 user-image">
                  <img src={ICampaignDetailUser} alt="" />
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
                      <p className="campaign-donation-info-number">
                        {campaignDetail.dueDate == null ? 0 : days}
                      </p>
                      <p className="campaign-donation-info-detail">Days left</p>
                    </CardText>
                  </Card>
                </div>
                <div className="col campaign-donation-info">
                  <Card>
                    <CardText>
                      <p className="campaign-donation-info-number">
                        {campaignDonation.length}
                      </p>
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
              <Button
                className="share-campaign-button"
                outline
                color="info"
                onClick={toggle}
                block
              >
                SHARE
              </Button>
              <Button className="donate-campaign-button btn-detail-style" block>
                <Link
                  to={`/campaign/campaign-detail/donate/${campaignDetail.campaignId}`}
                >
                  DONATE
                </Link>
              </Button>
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
                <Button className="btn-detail-style" block>
                  Copy
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <div className="the-story background-biru my-5 py-4">
        <div className="content">
          <div className="content-title mt-3">The Story</div>
          <div className="d-flex justify-content-center">
            <img
              src={campaignDetail.storyImage}
              alt=""
              style={{
                maxHeight: "230px",
                // minHeight: "230px",
                objectFit: "cover",
              }}
            />
          </div>
          <br />
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
  );
};
export default CampaignDetailInfo;
