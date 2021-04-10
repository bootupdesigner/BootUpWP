import React from "react";
import ServiceLink from "./ServiceLink";

import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";

import clutchcouturelogo from "../images/clutchcouturelogo.png";
import ctyslogo from "../images/ctyslogo.png";
import trifinancialserviceslogo from "../images/trifinancialserviceslogo.png";
import theofficialgluelogo from "../images/theofficialgluelogo.png";
import frannysfannyandmorelogo from "../images/frannysfannyandmorelogo.png";
import kingkasslogo from "../images/kingkasslogo.png";

const Portfolio = (props) => {
  const websites = [
    {
      logo: kingkasslogo,
      alt: "King Kass Logo",
      title: "King Kass",
      text: "King Kass is a mink lash store and blog website. King Kass is your go-to for lash and make-up tips. Purchase your lashes and learn how to install them from King Kass herself.",
      link: "https://www.kingkass.com/"
    },
    {
      logo: theofficialgluelogo,
      alt: "GLUE LLC logo",
      title: "Glue LLC",
      text: "The Official Glue website was designed as an event page for GLUE LLC's one week webinar event. The website provides guests with information about the events and how they can attend.",
      link: "https://www.theofficialglue.com/"
    },
    {
      logo: ctyslogo,
      alt: "cheaper than your stylist logo",
      title: "Cheaper Than Your Stylist",
      text: "Cheaper Than Your Stylist started as a store where you could purchase your lashes for less. Since opening the online store has evolved into much more, providing small business resources now as well.",
      link: "https://www.ctys.store/"
    },
    {
      logo: trifinancialserviceslogo,
      alt: "Tri Financial Services logo",
      title: "Tri Financial Services",
      text: "Tri Financial Services website's design was a revamp for us. Providing financial services, this informational website was designed to help plan a financially successful future for you and your family.",
      link: "https://www.trifinancialservices.com/"
    },
    {
      logo: clutchcouturelogo,
      alt: "Clutch Couture LLC logo",
      title: "Clutch Couture LLC ",
      text: "Clutch Couture is an experience like no other; This website allows you to plan your own paint party with all the materials included. Book a date, make a deposit and invite your friends. This website has everything.",
      link: "https://www.clutch-couture.com/"
    },
    {
      logo:frannysfannyandmorelogo,
      alt:"Franny's Fanny and More logo",
      title: "Franny's Fanny and More",
      text: "Franny's Fanny and More was inspired by Breast Cancer survivor, Franny. This website is a testament to Franny's journey through the fight for her life and her son's autism.",
      link: "https://www.frannysfannyandmore.online/"
    }
  ];
  return(
    <div>
      <div className="page-description">
        <h1>Portfolio</h1>
        <p>Web Designs Powered by Boot Up Web Designs</p>
      </div>
      <div style={{textAlign: "center", marginBottom: "15px"}}>
      <h2>We design websites to fit your business needs!</h2>
      <span>Here's a few of our completed projects</span>
      </div>
        
      {/* this is the card deck */}
      {websites.map((website) => {
        return(
          <CardDeck style={{ margin: "5px 10px" }}>
        
            <Card>
          <Card.Img
            variant="top"
            src={website.logo}
            alt={website.alt}
            width="15vw"
          />
          <Card.Body>
            <Card.Title>{website.title}</Card.Title>
            <Card.Text>
              {website.text}
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href={website.link}
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
        )
      }
      )}
      <ServiceLink />
    </div>
  );
};

export default Portfolio;