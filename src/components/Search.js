import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';
import { getOffers } from '../redux/actions/offersActions';
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import { getSearchOffers } from '../redux/actions/searchActions';

const Search=({locations, hours, getSearchOffers, getOffers} ) =>
{

  let currentDate = new Date();
  let currentMonth = (currentDate.getMonth() + 1).toString();
  if (currentMonth.length === 1)
  currentMonth = "0" + currentMonth;
  const minDate = currentDate.getFullYear() + '-' + currentMonth + '-' + currentDate.getDate();

  const [searchParams, setsearchParams] = useState({locationID:"",time:"09:00",duration:2,date:minDate});
  const [searchLoading, setsearchLoading] = useState(true);
  
  useEffect(() => {getSearchOffers(); }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => 
  {
    if(locations.length>0)
    setsearchLoading(false);
  }, [locations]);// eslint-disable-line react-hooks/exhaustive-deps


  const setSsearchParams =(type,value)=>
  {
      let newSearchParams={...searchParams};   
      newSearchParams[type]=value;  
      setsearchParams(newSearchParams);
  }

  const searchOffers=()=>
  {
    let location;
    if(searchParams.locationID==="")
    {
        location=locations[0];
    }
    else
    {
        location=locations.find(element => element.id.toString() === searchParams.locationID.toString())
    }
    let offer=
    {
        "originPlaceId": location.GooglePlaceID,
        "selectedStartDate": new Date(searchParams.date+' '+searchParams.time),
        "duration":searchParams.duration*60,
        "type": "DURATION",
    };
    let aditionalParams=
    {
        "date": searchParams.date,
        "time":searchParams.time,
        "duration":searchParams.duration*60,
        "type": "DURATION",
        "location":location
    };
    
    getOffers(offer, aditionalParams);    
  }

    return (  
    
        <>
        <div className="search-panel" >
            <Row xs={1} md={2} lg={5}>
                <Col  className="input-coll">
                <label htmlFor="dropdown-locations" className="input-label">LOCATION</label>
                <Form.Group>
                    <Form.Control  size="sm" as="select"  value={searchParams?.locationID}  onChange={(e)=>setSsearchParams("locationID",e.target.value)} > 
                     {locations.map((item,index) =>  <option key={item.id} value={item.id}  >{item.name}</option>  )}
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col  className="input-coll"> 
                    <label htmlFor="date" className="input-label">DATE</label>
                    <Form.Group  >
                     <Form.Control name="datePickUp" type="date" size="sm" value={searchParams?.date} min={minDate} onChange={(e)=>setSsearchParams('date',e.target.value)} />
                    </Form.Group>
                </Col>
                <Col  className="input-coll">
                    <label htmlFor="time" className="input-label">PICK-UP TIME</label>
                    <Form.Group>
                    <Form.Control  size="sm" as="select" value={searchParams?.time} onChange={(e)=>setSsearchParams("time",e.target.value)} > 
                     {hours.map(item =>   <option key={item} value={item}  >{item + ' h'}</option>  )}
                    </Form.Control>
                    </Form.Group>
                </Col>
                <Col  className="input-coll">
                    <label htmlFor="dur" className="input-label">DURATION</label>
                    <Form.Group>
                    <Form.Control  size="sm" as="select" value={searchParams?.duration}  onChange={(e)=>setSsearchParams("duration",e.target.value)} > 
                       <option value={2}  >{ '2 h'}</option> 
                       <option value={3}  >{ '3 h'}</option> 
                       <option value={4}  >{ '4 h'}</option> 
                    </Form.Control>
                    </Form.Group>
                </Col>
                <Col  xs={12} md={12} className="input-coll">
                    <label htmlFor="btnSrc" className="input-label"></label>
                    <Button href="#title" id="btnSrc" disabled={searchLoading} variant="success" size="sm" block onClick={()=>searchOffers()}>
                    {searchLoading===true?
                    <><Spinner as="span"animation="grow" size="sm" role="status" aria-hidden="true"/>Loading...</>  
                    :"SEARCH"
                    }
                    </Button>
                </Col>
            </Row>
        </div>
        <div className="search-controls"> 
            <MapContainer locations={locations} locationID={searchParams?.locationID} selectLocation={setSsearchParams}/>    
        </div>   
        </>
    );
}

const mapStateToProps = state => ({     
    locations:state.searchOffers.locations || [],
    hours:state.searchOffers.hours || [],
});
const mapDispatchTopProps = {getSearchOffers,getOffers}

export default connect(mapStateToProps, mapDispatchTopProps)(Search);