import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';

const OfferDetails = ({selectedOffer}) => 
{
  return (
    <div style={{ padding: "15px" }}>
      <Row xs={1} md={2} lg={2}>
        <Col >
          <Image src={selectedOffer.vehicleType.images.hdpi} fluid />
        </Col>
        <Col >
          <div className="offer-details-header"> 
          <h3>{selectedOffer.vehicleType.title}</h3>
          <span className="offer-book-title">{selectedOffer.vehicleType.exampleCar}</span>
          </div> 
          <div className="offer-book-item">
            <span className="offer-book-title">Duration: </span>
            <span className="offer-book-value">{selectedOffer.duration}</span>
          </div>
          <div className="offer-book-item">
            <span className="offer-book-title">Passengers: </span>
            <span className="offer-book-value">{selectedOffer.vehicleType.nrOfPassengers}</span>
          </div>
          <div className="offer-book-item">
            <span className="offer-book-title">Baggage: </span>
            <span className="offer-book-value">{selectedOffer.vehicleType.nrOfBaggage}</span>
          </div>  
          <div className="offer-book-item">
            <span className="offer-book-title">Value-added tax: </span>
            <span className="offer-book-value">{selectedOffer.vat}</span>
          </div>   
          <div className="offer-book-item">
            <span className="offer-book-title">Price vary: </span>
            <span className="offer-book-value">{selectedOffer.vehicleType.priceVary===false?"NO":"YES"}</span>
          </div>           
          <div className="offer-details-price">
            <span className="offer-book-title">Price: </span>
            <span className="offer-book-value price">{'€ ' +selectedOffer?.amountNet/100 }</span>
          </div>   
        </Col>
      </Row>
    </div>
  );
}

export default OfferDetails