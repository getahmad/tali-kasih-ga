import React, { useEffect, useState } from "react";
import ICampaignDetailDonator from "./images/campaign-donator.png";
import { Button } from "reactstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

const CampaignDetailDonation = () => {
  const [campaignDonation, setCampaignDonation] = useState([]);
  let { campaignId } = useParams();
  const [err, setErr] = useState("");

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };

  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/donations?campaignId=${campaignId}`
    )
      .then((response) => {
        setCampaignDonation(response.data);
      })
      .catch(() => {
        setErr("no data");
      });
  }, [campaignId]);

  return (
    <div className="custom-card campaign-donations my-5 py-4 px-3">
      <div className="container">
        <div className="title mt-3">Donations</div>
        <div className="content-donations">
          <div className="row justify-content-center">
            <span>{err}</span>
            {campaignDonation.map((campaignDonation) => (
              <div className="col-lg-6 mb-3" key={campaignDonation.id}>
                <div className=" custom-card-donation py-3 px-3">
                  <div className="row">
                    <div className="col-3 user-image">
                      <img src={ICampaignDetailDonator} alt="" />
                    </div>
                    <div className="col-8 user-info ml-1">
                      <p className="user-donation">
                        Rp. {formatRupiah(campaignDonation.amount)}
                      </p>
                      <p className="user-name">{campaignDonation.name}</p>
                      <p className="donate-time">
                        {dateFormat(campaignDonation.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="user-comments">
                    <span>"{campaignDonation.message}"</span>
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
