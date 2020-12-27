import axios from 'axios';


export const GetMenuList  = async() => {
    const headers = {
        'Content-Type': 'application/json',
    };
    let responseData ={
        data:[],
        status:false,
        loading:false
    }
    await axios
        .get(`http://10.17.2.20:8010/shareyou/api/Subcategory`)
        .then((res) => {
            let resData = res.data;
            console.log('resData', resData);
            responseData.data = resData;   
        });
        console.log('responseData', responseData);
    return responseData;
  }; 
export const GetAllPost  = async() => {
    const headers = {
        'Content-Type': 'application/json',
    };
    let responseData ={
        data:[],
        status:false,
        loading:false
    }
    await axios
        .get(`http://10.17.2.20:8010/shareyou/api/getBlog`)
        .then((res) => {
            let resData = res.data;
            console.log('resData', resData);
            responseData.data = resData;   
        });
        console.log('responseData', responseData);
    return responseData;
  };
export const getPopularPost  = async() => {
    const headers = {
        'Content-Type': 'application/json',
    };
    let responseData ={
        data:[],
        status:false,
        loading:false
    }
    await axios
        .get(`http://10.17.2.20:8010/shareyou/api/getPopularPost`)
        .then((res) => {
            let resData = res.data;
            console.log('resData', resData);
            responseData.data = resData;   
        });
        console.log('responseData', responseData);
    return responseData;
  };
  
export const getShowPost  = async(id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    let responseData ={
        data:[],
        status:false,
        loading:false
    }
    await axios
        .get(`http://10.17.2.20:8010/shareyou/api/getBlog/${id}`)
        .then((res) => {
            let resData = res.data;
            console.log('resData', resData);
            responseData.data = resData;   
        });
        console.log('responseData', responseData);
    return responseData;
  };
  