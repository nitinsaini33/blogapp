import React from 'react'

import axios from 'axios';


        export const getproducts=async(user)=>{
        try{

            const res=await axios.get('https://fakestoreapi.com/products')
        
            return res.data
        } 
        catch(error){
            console.log("error while  callingprodect api",error)
        }

    }
  

   


