const baseURL = "http://localhost:8080/sales";

const getSale= () =>{
    return fetch(baseURL).then((res) =>res.json())
};



export{getSale};