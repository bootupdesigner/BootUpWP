import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import BookingWebsite from './BookingWebsite';
import EcommerceWebsite from './EcommerceWebsite';
import InformationalWebsite from './InformationalWebsite';
import ScheduleInteg from './ScheduleInteg';
import Revamp from './Revamp';
import LogoDesign  from './LogoDesign';
import SeoDesign from './SeoDesign';
import EmailDesign from './EmailDesign';

const Shop = () => {
return(
    <div>
        <div className="page-description">
        <h1>Shop</h1>
        <p>Select Your Web Design Service</p>
      </div>
      <Container>
          <Row>
              <Col>
              <h2 className="text-center">Website Designs
          </h2>
          </Col>
          </Row>
          <Row>
              <Col><EcommerceWebsite /></Col>
              <Col><InformationalWebsite /></Col>
              <Col><BookingWebsite /></Col>
          </Row>
          <Row>
              <Col>
              <h2 className="text-center">
                  Uprgade Your Website
                  </h2>
            </Col>
          </Row>
          <Row>
              <Col>
              <Revamp />
              </Col>
              <Col>
              <ScheduleInteg />
              </Col>
          </Row>
          <Row>
              <Col>
              <h2 className="text-center">
                  Website Services
                  </h2>
                  </Col>
          </Row>
          <Row>
              <Col>
              <LogoDesign />
              </Col>
              <Col>
              <EmailDesign />
              </Col>
              <Col>
              <SeoDesign />
              </Col>
          </Row>
      </Container>

    </div>
)
}

export default Shop;