import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

const CampaignDetailUpdates = () => {
  const [campaignUpdate, setCampaignUpdate] = useState([]);
  let { campaignId } = useParams();
  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns/update?campaignId=${campaignId}`
    ).then((response) => {
      // console.log(response.data)
      setCampaignUpdate(response.data);
    });
  }, [campaignId]);
  return (
    <div>
      <div className="custom-card campaign-updates my-5 py-4 px-3">
        <div className="container">
          <div className="title mt-3">Updates</div>
          <div className="content-updates">
            <Timeline>
              {campaignUpdate.map((campaignUpdate) => (
                <TimelineEvent
                  title="-"
                  createdAt={dateFormat(campaignUpdate.createdAt)}
                >
                  <div>{campaignUpdate.withdrawalAmount}</div>
                  <div>
                    {" "}
                    Withdrawal purpose: {campaignUpdate.withdrawalPurpose}
                  </div>
                </TimelineEvent>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailUpdates;
