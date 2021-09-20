/**
 * @desc Utilidades
 */
 import Requests from "../Utils/Requests";

 /**
  * @desc Modelo de items
  */
 
 class ItemModel {

   /**
    * @desc Lista los items
    *
    * @return { Promise }
    */
   static async getItems(query) {
     try {

       // Requester
       const request = new Requests();
             
       // Respuesta
       return await request.get(`http://localhost:3001/api/items?q=${query}`);
       
     } catch (error) {
       
       console.log(error);
 
       return false;
     }
   }

   /**
    * @desc Lista un item
    *
    * @return { Promise }
    */
    static async getItem(id) {
      try {
 
        // Requester
        const request = new Requests();
              
        // Respuesta
        return await request.get(`http://localhost:3001/api/items/${id}`);
        
      } catch (error) {
        
        console.log(error);
  
        return false;
      }
    }
 }
 export default ItemModel;
 