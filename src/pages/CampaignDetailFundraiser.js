import React from 'react';
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import CampaignDetailFundraiserInfo from "../components/CampaignDetailFundraiserInfo"
import CampaignDetailFundraiserUpdates from "../components/CampaignDetailFundraiserUpdates"

import "./campaigndetail.css";
import CampaignDetailFundraiserDonation from '../components/CampaignDetailFundraiserDonation';
import CampaignDetailFundraiserComments from '../components/CampaignDetailFundraiserComments';


const CampaignDetailFundraiser=()=>{

    return(
        <>
            <TopMenu/>
            <div className="container">
              
                <CampaignDetailFundraiserInfo/>
                <CampaignDetailFundraiserUpdates/>
                <CampaignDetailFundraiserDonation/>
                <CampaignDetailFundraiserComments/>
            </div>
            <Footer/>
        </>
    )
}

export default CampaignDetailFundraiser;