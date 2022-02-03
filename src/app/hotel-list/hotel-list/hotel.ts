export interface IHotel {
    hotelId: number;
    hotelName: string;
    description: string;
    price: number;
    imageUrl: string;
}


// export class Hotel implements IHotel{
//     construcor(
        
//       public  hotelId: number,
     
//       public  hotelName: string,
//       public  description: string,
//       public price: number,
//       public imageUrl: string,
//     ){}

//     gteNewPrice(price: number): number{
//         return price -5
//     }
// }