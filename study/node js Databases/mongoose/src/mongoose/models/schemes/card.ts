import mongoose from "../../mongoose";


export default new mongoose.Schema({    
  
    number : {
        type : String,
        required : true,
    },
    owner : {
        type : String,
        required : true,
    },
    validThrough : {
        type : Date,
        required : true,
    }    
})


