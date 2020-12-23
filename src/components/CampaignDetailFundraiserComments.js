import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import ICampaignDetailDonator from "./images/campaign-donator.png";
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const CampaignDetailFundraiserComments = () => {
    const [campaignComment, setCampaignComment] = useState([])
    let{campaignId} = useParams()
    
    
    // const getUsersComment = ()=>{
    //     Axios
    //     .get(`https://binar8-agus-saputra.nandaworks.com/campaigns/comment?campaignId=${campaignId}`)
    //     .then(response=>{
    //         // console.log(response.data)
    //         setCampaignComment(response.data)
    //     })
    // }

    // get comments
    useEffect(()=>{
        Axios
        .get(`https://binar8-agus-saputra.nandaworks.com/campaigns/comment?campaignId=${campaignId}`)
        .then(response=>{
            console.log(response.data)
            setCampaignComment(response.data)
        })
        
    },[campaignId])

    // post comment
    // const submitComment = (e) =>{
    //     e.preventDefault();
    //     const url = `https://binar8-agus-saputra.nandaworks.com/campaigns/comment`;
    //     const postComment = {
    //         campaignId: campaignId,
    //         comment: userComment,
    //     }
    //     Axios
    //     .post(url, postComment,{
    //         headers: {
    //             Authorization: `Bearer ${userToken}`,
    //         },
    //     })
    //     .then(response => {
    //         console.log(response.data)
    //         getUsersComment();
    //     })
    // }

    
    return (
        <div>
            <div className="custom-card donator-comments my-5 py-4 px-3">
                <div className="container">
                    <div className="title">Comments</div>
                  
                    <div>
                        {campaignComment.map((comment)=>(
                            <div className="campaign-comments text-left">
                                <div className="comments-card">
                                    <div className="row">
                                        <div className="col-1 user-image">
                                            <img src={ICampaignDetailDonator} alt=""/>
                                        </div>
                                        <div className="col-5 user-info">
                                            {/* <p className="user-name"></p> */}
                                            <p className="comments-time">{comment.createdAt}</p>
                                        </div>
                                    </div>
                                    <div className="comment-content mt-3">
                                        <p>"{comment.comment}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <Button className="load-more-comments" outline color="info">LOAD MORE</Button>
                </div>
            </div>
        </div>
      );
}
 
export default CampaignDetailFundraiserComments;