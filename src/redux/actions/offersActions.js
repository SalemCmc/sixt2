
import { GET_OFFERS, SET_OFFERS_SEARCH_LOADING, CLOSE_MODAL } from './types';
import { post } from '../../webAPI/index'
import { toast } from 'react-toastify';

export   const getOffers = (offer, searchParams) => dispatch => {  

    dispatch({ type: SET_OFFERS_SEARCH_LOADING });

    post("offers",offer).then(data =>
    {
        dispatch({type: GET_OFFERS, offers: filterOffers(data),searchParams: searchParams });    
    })
}

const filterOffers = (offers) =>
{
    let filteredOffers=offers.filter(element => (element.vehicleType.name === "FIRST_CLASS" || element.vehicleType.name === "BUSINESS_VAN") );
    return filteredOffers;
}


export   const bookOffer = (newOffer) => dispatch => 
{  
	//simulation of api waiting...
	setTimeout(()=>{ 
		toast.success("You have successfully booked the offer!",{"autoClose": 10000});
		dispatch({type: CLOSE_MODAL})
	}, 2000);

}
export   const bookOffer6666 = (newOffer) => dispatch => 
{  
	//simulation of api waiting...
	setTimeout(()=>{ 
		toast.success("You have successfully booked the offer!",{"autoClose": 10000});
		dispatch({type: CLOSE_MODAL})
	}, 2000);

}


// ovo je izmjena za git...
// ovo je editovano kroz gitHUB online editor.
// ovo je dodato lokalno
// opet dodato lokalno
// opet dodato lokalno
// dodato kroz gitHub online editor
// VS




// das is branch 
