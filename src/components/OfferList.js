import React, { useEffect, useRef  } from 'react';
import { Button,  Card, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

import { showModal } from '../redux/actions/uiContextActions';


const OffersList = (props) =>
{

  const titleRef = useRef();
  useEffect(() => {  

    if(props.offersList!=null )
      titleRef.current.scrollIntoView({ behavior: 'smooth' }) ;    

  }, [props.offersList]);

  const showofferDetails = (selectedOffer) => 
  {
    props.showModal("OfferDetails", { selectedOffer });
  }

  const bookOffer = (selectedOffer) =>
  {
    props.showModal("OfferBook", {selectedOffer});
  }

  return (
    <>
      <div ref={titleRef} className="offer-list-title">
       {props.loading === true ? <center><Spinner animation="border" /><p>NOTE: first offers fetch can take 5-10 seconds...</p> <h3>Searching offers... </h3></center>: null}
       {props.offersList && props.offersList.length === 0 ? <center><h3>Sorry, no results! </h3></center> : null}
       {props.loading === false && props.offersList?.length > 0 ? <h4 className="input-label">We found {props.offersList?.length} offers </h4> : null}
      </div>

      <Row> 
        {(props.offersList && props.offersList.length > 0) && props.offersList.map((item) =>

          <Col xs={12} md={6} lg={4} key={item.offerIdentifier}>
            <Card  className="card-offer">
              <Card.Img onClick={() => showofferDetails(item)} className="card-img" 
                variant="top" src={( item?.vehicleType?.images?.mdpi) } />
              <Card.Body >
                <Card.Title>{item.vehicleType.title}</Card.Title>
                <span className="card-dtl">from</span>
                <h3 className="card-price">{'€ '+item.amountNet/100 }</h3>
                <p className="card-dtl">per day</p>
                <Button variant="dark" size="sm" block onClick={() => bookOffer(item)}>Book now</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
}

const mapStateToProps = state => ({
  offersList: state.offers.offerList,
  loading: state.offers.loading,
});

const mapDispatchTopProps = {showModal}

export default connect(mapStateToProps, mapDispatchTopProps)(OffersList);