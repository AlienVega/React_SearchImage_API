import axios from 'axios';
const searchImages= async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
         Authorization:'Client-ID bJUbI91YoHJgA_ek4O4M-ByNHmn-MjGs5-ueBRWEiBo' 
       },
       params:{
         query:term,
       }
     })
     return response.data.results;
 };

 export default searchImages;