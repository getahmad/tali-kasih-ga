import { Button, Spinner } from "reactstrap";
import React, { useEffect, useState } from "react";
import ICampaignDetailDonator from "./images/campaign-donator.png";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import dateFormat from "dateformat";

const CampaignDetailComments = () => {
  const [loading, setLoading] = useState(false);
  const [campaignComment, setCampaignComment] = useState([]);
  const [userComment, setUserComment] = useState("");
  let { campaignId } = useParams();
  const userToken = Cookies.get(`token`);

  const getUsersComment = () => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns/comment?campaignId=${campaignId}`
    ).then((response) => {
      // console.log(response.data);
      setCampaignComment(response.data);
    });
  };

  // get comments
  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns/comment?campaignId=${campaignId}`
    ).then((response) => {
      // console.log(response.data);
      setCampaignComment(response.data);
    });
  }, [campaignId]);

  // post comment
  const submitComment = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = `https://binar8-agus-saputra.nandaworks.com/campaigns/comment`;
    const postComment = {
      campaignId: campaignId,
      comment: userComment,
    };
    Axios.post(url, postComment, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((response) => {
      // console.log(response.data);
      getUsersComment();
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="custom-card donator-comments my-5 py-4 px-3">
        <div className="container">
          <div className="title">Comments</div>
          <div className="donator-comments text-center mx-auto mb-5">
            <form onSubmit={submitComment}>
              <textarea
                name="comment-text"
                id="user-comment"
                placeholder="Give them support..."
                cols="30"
                rows="10"
                onChange={(e) => setUserComment(e.target.value)}
              ></textarea>
              <div className="text-right">
                <Button
                  className="post-comment btn-detail-style"
                  type="submit"
                  color="danger"
                >
                  {loading ? <Spinner color="light" /> : "POST"}
                </Button>
              </div>
            </form>
          </div>
          <div>
            {campaignComment.map((comment) => (
              <div className="campaign-comments text-left">
                <div className="comments-card">
                  <div className="row">
                    <div className=" user-image ml-3" lg={2}>
                      <img src={ICampaignDetailDonator} alt="" width="100%" />
                    </div>
                    <div className="user-info px-3" lg={10}>
                      <p className="comments-time">
                        {" "}
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

export default CampaignDetailComments;
