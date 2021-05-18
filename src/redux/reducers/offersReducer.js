import { GET_OFFERS, SET_OFFERS_SEARCH_LOADING } from '../actions/types';

const initialState = 
{
  loading:false,
  offerList: null,
  selectedOffer:null,
  searchParams:null
};

export default function offRed(state = initialState, action)
{
  switch (action.type)
  {   
    case GET_OFFERS:
      return {
        ...state,
        offerList: action.offers,
        searchParams: action.searchParams,
        loading: false
      };
    case SET_OFFERS_SEARCH_LOADING:
        return {
          ...state,
          loading:true,
          offerList: null
      };
    default: return state;
     
  }
}