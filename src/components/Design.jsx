import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Design = (props) => {
    const websites = [
        {
            url: "https://cdn.pixabay.com/photo/2017/07/31/22/59/people-2561845_960_720.jpg",
            title: "Booking and Scheduling",
            description: "",
            link:"/BookingDesign",
            button: "Learn more about Booking Websites",
            alt: "women at hair salon appointment"
        },
        {
            url: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
            title: "Online Stores",
            description: "", 
            link:"/StoreDesign",
            button: "Learn more about Online Stores",
            alt: "clothing store with arranged clothing"
        },
        {
            url: "https://cdn.pixabay.com/photo/2016/07/05/23/45/inside-1499607_960_720.jpg",
            title: "Informational Websites",
            description: "",
            link: "/InformationDesign",
            button: "Learn more about Informational Websites",
            alt: "conference desk ready for a meeting"
        }
    ];
    
    return(
        <Row class="justify-content-center">
            <h2 className="text-center" id="websitedesigns">Website Designs</h2>

        {websites.map((sites) => {
            return(
                <Col sm={4} md={4}>
                  <Card className="my-2 mx-2">
                    <Card.Img variant="top" src={sites.url} alt={sites.alt} height="300px" width="95px"/>
            <Card.Body>
              <Card.Title>{sites.title}</Card.Title>
              <Card.Text>{sites.description}</Card.Text>
              <Button variant="primary" href={sites.link} size="sm">{sites.button}</Button>
            </Card.Body>
          </Card>
          </Col>
            )
        })}

        </Row>
    )
};

export default Design;