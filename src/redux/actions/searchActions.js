
import { GET_SEARCH_PARAMS } from './types';

export const getSearchOffers = () => dispatch => {  

    dispatch({
        type: GET_SEARCH_PARAMS,
        locations: getLocations(),
        hours: getHours()
    })
}

export const getLocations = ()=>
{
    return [
        {
            id: 1,
            name:"Munich Hofbräuhaus",
            address: "Hofbräuhaus München, Platzl, Munich, Germany",
            GooglePlaceID: "ChIJxfxSz4t1nkcRLxq9ze1wwak",
            lat: 48.139992725249954,  lng: 11.580028982145246
        },
        {
            id: 2,
            name:"Munich center",
            address: "Stachus, Munich, Germany",
            GooglePlaceID: "EhtLYXJsc3BsLiwgTcO8bmNoZW4sIEdlcm1hbnkiLiosChQKEgkfRGon93WeRxEvZKuqIIsjnxIUChIJJ8yNql7fnUcRAKU5CaQlHQU",
            lat: 48.14004690464128,   lng: 11.566196140319423
        },
        {
            id: 3,
            name:"The Olympic Tower",
            address: "Spiridon-Louis-Ring, Munich, Germany",
            GooglePlaceID: "ChIJU-Q6JoF2nkcRdQApBoHVU8s",
            lat: 48.17062983617009,   lng: 11.548366997991138
        },
        {
            id: 4,
            name:"The English Garden",
            address: "Englischer Garten, Munich, Germany",
            GooglePlaceID: "ChIJayv4lZd1nkcR0e_vfGLfm8k",
            lat: 48.162098752033714,  lng: 11.602716469683038
        },
        {
            id: 5,
            name:"The Allianz Arena",
            address: "Allianz Arena, Werner-Heisenberg-Allee",
            GooglePlaceID: "ChIJHyWKEoVznkcRI8QyjkJgTe0",
            lat: 48.218949839837315,  lng: 11.624744769157259
        },
        {
            id: 6,
            name:"The Nymphenburg Castle ",
            address: "Schloss Nymphenburg, Schloß Nymphenburg",
            GooglePlaceID: "ChIJLWiif8x3nkcRZm0epRZWTCc",
            lat: 48.158449980899356,  lng: 11.50331429807012
        }
    ]
}
export const getHours = () => 
{
    let hours=[];
    var i;
    for (i = 0; i < 24; i++)
    {
        if(i<10) hours.push('0'+i+':00','0'+i+':30' );
        else     hours.push( i+':00',i+':30');     
    }
    return hours;
}