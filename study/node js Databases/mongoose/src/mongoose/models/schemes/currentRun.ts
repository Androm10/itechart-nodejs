import mongoose from "../../mongoose";
import card from "./card";


function isUInt(value: number): boolean {
    if(value != Math.round(value) || value < 0)
        return false;
    return true;
}

export default new mongoose.Schema({

    startDate : {
        type : Date,
        required : true
    },

    driver : {
        type : {
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
                type : card,
                required : false
            }
        },
        required : true
    },
    startFuelLevel : {
        type : Number,
        min : 0,
        max : 100,
        validate : isUInt,
        required : true
    },
    startMileage : {
        type : Number,
        validate : isUInt,
        required : true
    }
    
})


