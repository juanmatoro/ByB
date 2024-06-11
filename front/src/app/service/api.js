export const APIHeaders ={
    Accept:"aplication/json",
    "Content-Type": "aplication/json",
    "Access-Control-Allow-Origin":"*",
    Authorization:{
        toString(){
            return `Bearer ${sessionStorage.getItem('token')}`;
        }
    }
}