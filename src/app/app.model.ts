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

export interface UserResponse{
    id:number;
    user:string;
    password:string;
}

export interface UserRequest{
    user:string;
    password:string;
}

export interface CartResponse{
    id:number;
    prodId:number;
    userId:number;
    phoneResponse:PhoneResponse;
}

export interface CartRequest{
    prodId:number;
    userId:number;
}