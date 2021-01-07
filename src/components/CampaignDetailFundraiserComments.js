import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import ICampaignDetailDonator from "./images/campaign-donator.png";
import { useParams } from "react-router-dom";
import Axios from "axios";
import dateFormat from "dateformat";

const CampaignDetailFundraiserComments = () => {
  const [campaignComment, setCampaignComment] = useState([]);
  let { campaignId } = useParams();

  // get comments
  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns/comment?campaignId=${campaignId}`
    ).then((response) => {
      // console.log(response.data)
      setCampaignComment(response.data);
    });
  }, [campaignId]);

  return (
    <div>
      <div className="custom-card donator-comments my-5 py-4 px-3">
        <div className="container">
          <div className="title">Comments</div>

          <div>
            {campaignComment.map((comment) => (
              <div className="campaign-comments text-left">
                <div className="comments-card">
                  <div className="row">
                    <div className="col-1 user-image">
                      <img src={ICampaignDetailDonator} alt="" />
                    </div>
                    <div className="col-5 user-info">
                      {/* <p className="user-name"></p> */}
                      <p className="comments-time">
                        {dateFormat(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="comment-content mt-3">
                    <span>"{comment.comment}"</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button className="load-more-comments" outline color="info">
            LOAD MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailFundraiserComments;
