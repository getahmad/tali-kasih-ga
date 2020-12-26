import React, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import ICampaignDetail from "../components/images/campaign-detail.png";
import ICampaignDetailUser from "../components/images/campaign-user.png";
import ICampaignDetailDonator from "../components/images/campaign-donator.png";
import Medical from "../components/images/medical.png";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { Link } from "react-router-dom";
import CampaignDetailInfo from "../components/CampaignDetailInfo";
import CampaignDetailUpdates from "../components/CampaignDetailUpdates";

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
import CampaignDetailDonation from "../components/CampaignDetailDonation";
import CampaignDetailComments from "../components/CampaignDetailComments";
import CampaignDetailRelatedCampaign from "../components/CampaignDetailRelatedCampaign";

const CampaignDetail = () => {
  // fetch API pakai useEffect
  // panggil properti dari API harus sesuai dari response API (penamaan buat di tampilan itu bebas)
  // buat variable untuk menyimpan data respon, lalu buat variable.map. didalam map ditaro isi page(dalam hal ini campaign detail)
  // useState untuk data dan setData dengan isi []
  // dalam variable.map, untuk menampilkan data dengan data.nama-properti dari API contoh: data.title
  // ketika sudah konek, cek dulu bagian network -> response untuk melihat hasil datanya. ketika mengeluarkan data: {...} maka harus diakses dengan res.data

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
