import { GET_SEARCH_PARAMS } from '../actions/types';

const initialState =
{
  locations: [],
  hours: [],
};

export default function searRed(state = initialState, action)
{
  switch (action.type)
  {   
    case  GET_SEARCH_PARAMS:
      return {
        ...state,
        locations: action.locations,
        hours: action.hours
      };  
    default: return state;
  }
}