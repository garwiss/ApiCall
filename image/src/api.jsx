import  axios from 'axios'


//?api call 
const SearchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID RrIX2-xskmUJDqWXM68SjWzALYzqXtFN4IjNLE0IpFw'
      },
      params:{query:term}
    });
   
    //*içine kadar girip döndürdük 
    return response.data.results;
    };
    export default SearchImages;