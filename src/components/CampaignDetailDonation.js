import React, { useEffect, useState } from "react";
import ICampaignDetailDonator from "./images/campaign-donator.png";
import { Button } from "reactstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

const CampaignDetailDonation = () => {
  const [campaignDonation, setCampaignDonation] = useState([]);
  let { campaignId } = useParams();

  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/donations?campaignId=${campaignId}`
    ).then((response) => {
      // console.log("donasi")
      // console.log(response.data)
      setCampaignDonation(response.data);
    });
  });

  return (
    <div className="custom-card campaign-donations my-5 py-4 px-3">
      <div className="container">
        <div className="title mt-3">Donations</div>
        <div className="content-donations">
          <div className="row justify-content-center">
            {campaignDonation.map((campaignDonation) => (
              <div className="col-lg-6 mb-3">
                <div className=" custom-card-donation py-3 px-3">
                  <div className="row">
                    <div className="col-3 user-image">
                      <img src={ICampaignDetailDonator} alt="" />
                    </div>
                    <div className="col-8 user-info ml-1">
                      <p className="user-donation">
                        Rp. {campaignDonation.amount}
                      </p>
                      <p className="user-name">{campaignDonation.name}</p>
                      <p className="donate-time">
                        {dateFormat(campaignDonation.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="user-comments">
                    <p>"{campaignDonation.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="load-more-donator" outline color="info">
              LOAD MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailDonation;
