export interface PhoneResponse{
    id:number;
    name:string;
    price:number;
    descr:string;
    disc:number;
    imgUrl:string
}

export interface PhoneRequest{
    name:string;
    descr:string;
    disc:number;
    price:number;
    imgUrl:string
}