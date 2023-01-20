export interface AuthData {
  // _id:string,
  email: string;
  password: string;
  // _token: string;
  // _tokenExpirationDate: Date;
}

// export class AuthData {
//   constructor(
//     public email: string,
//     public  password: string,
//     public id: string,
//     private _token: string,
//     private _tokenExpirationDate: Date
//   ) {}

//   get token(){
//     if( !this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
//         return null ;
//     }
//     return this._token
//   }

// }
