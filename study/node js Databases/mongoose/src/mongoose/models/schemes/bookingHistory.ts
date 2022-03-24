import mongoose from "../../mongoose";
import card from "./card";

export default new mongoose.Schema({    
  
    startDate : {
        type : Date,
        required : true
    },
    driver : {
        licenceNumber : {
            type : String,
            required : true
        },
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        card : {
            type: card,
            required : true
        }
    }
})


