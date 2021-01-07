import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import CampaignDetailInfo from "../components/CampaignDetailInfo";
import CampaignDetailUpdates from "../components/CampaignDetailUpdates";

import "./campaigndetail.css";
import CampaignDetailDonation from "../components/CampaignDetailDonation";
import CampaignDetailComments from "../components/CampaignDetailComments";
import CampaignDetailRelatedCampaign from "../components/CampaignDetailRelatedCampaign";

const CampaignDetail = () => {
  return (
    <>
      <TopMenu />
      <div className="container">
        <CampaignDetailInfo />
        <CampaignDetailUpdates />
        <CampaignDetailDonation />
        <CampaignDetailComments />
      </div>
      <CampaignDetailRelatedCampaign />
      <Footer />
    </>
  );
};

export default CampaignDetail;
