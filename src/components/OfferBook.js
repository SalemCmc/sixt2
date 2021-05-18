import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Col, Row, Form, Spinner } from 'react-bootstrap';
import { bookOffer } from '../redux/actions/offersActions';

const OfferBook = ({selectedOffer, searchParams, bookOffer}) =>
{

  const [validated, setValidated] = useState(false);
  const [customer, setCustomer] = useState({});
  const [showSpiner, setShowSpiner] = useState(false);

  const handleInput = (e) =>
  {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true)
    {
      saveBooking();
    }
    setValidated(true);
  }

  const saveBooking = () =>
  {
    setShowSpiner(true);
    let newBooking = {
      "customer":customer,
      "offerIdentifier": selectedOffer.selectedOffer,
      "orderDetails": searchParams
    };
    bookOffer(newBooking);
  }


  return (
    <div style={{ padding: "15px" }}>

      <Row xs={1} md={2} lg={2}>
        <Col >
          <Image src={selectedOffer.vehicleType?.images.hdpi} fluid />
        </Col>
        <Col >
          {showSpiner === true ? <center style={{ marginTop: "15%" }}><Spinner animation="border" /> <h3>Booking in progress...</h3></center> :

            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <Form.Row>
                <Form.Group as={Col} >
                  <div className="offer-book-item">
                    <span className="offer-book-title">Pick-up location: </span>
                    <span className="offer-book-value">{searchParams.location.name}</span>
                  </div>
                  <div className="offer-book-item">
                    <span className="offer-book-title">Pick-up date: </span>
                    <span className="offer-book-value">{searchParams.date}</span>
                  </div>
                  <div className="offer-book-item">
                    <span className="offer-book-title">Pick-up time: </span>
                    <span className="offer-book-value">{searchParams.time}</span>
                  </div>
                  <div className="offer-book-item">
                    <span className="offer-book-title">Duration: </span>
                    <span className="offer-book-value">{searchParams.duration+ ' ('+searchParams.duration/60+'h)'}</span>
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} className="no-bottom-margin">
                  <b>Your name</b>
                  <Form.Control name="nameame" size="sm" type="text" required onChange={(e) => handleInput(e)} />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} >
                  <b>Your last name</b>
                  <Form.Control name="lastName" size="sm" type="text" required onChange={(e) => handleInput(e)} />
                </Form.Group>
              </Form.Row>
              <Button type="submit" variant="success" size="sm" block >COMPLETE YOUR BOOKING</Button>
            </Form>
          }
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({searchParams: state.offers.searchParams});
const mapDispatchTopProps = { bookOffer }

export default connect(mapStateToProps, mapDispatchTopProps)(OfferBook);
