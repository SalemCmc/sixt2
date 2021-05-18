import {  toast } from 'react-toastify';
const route="https://vet-ord-api.herokuapp.com/api/sixt/"


export const post= (path,params)=>
{
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };  
    
        fetch(route+path, requestOptions)
            .then(response => response.json())
            .then(data =>
            {
                resolve(data);
            }
            )
            .catch(error => {  
                toast.error("Something went wrong! "+error,{"autoClose": 10000});
                console.log("ERROR: ",error);
                reject(error);
            });
      });
}

export const get= (path)=>
{
    return new Promise((resolve, reject) => {
        fetch(route+path)
            .then(response => response.json())
            .then(data =>
            {
                resolve(data);
            }
            )
            .catch(error => {  
                       
                console.log("ERROR: ",error);
                reject(error);
            });
      });
}