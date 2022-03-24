import mongoose from "../mongoose";
import currentRunScheme from './schemes/currentRun';
import bookingHistoryScheme from './schemes/bookingHistory';

let model = mongoose.model('car', new mongoose.Schema({

    VIN : {
        type : Number,
        required : true,
        validate : isUInt
    },
    
    registrationNumber : {
        type : Number,
        default : Date.now(),
        validate : isUInt
    },

    productionInfo : {
        type : {
            brand : {
                type : String,
                required : true
            },
            model : {
                type : String,
                required : true
            },
            date : {
                type : Date,
                required : true
            },
        },
        required : true
    },
    
    status : {
        type : String,
        enum : ['Free', 'Reserved', 'In Use', 'Unavailable', 'In Service'],
        required : true
    },
    
    fuelLevel : {
        type : Number,
        min : 0,
        max : 100,
        validate : isUInt,
        required : true
    },
    
    mileage : {
        type : Number,
        validate : isUInt,
        required : false
    },
     
    currentRun : {
        type: currentRunScheme,
        default : undefined,
        required : false
    },

    location : {
        type : {
            type : String,
            enum : ['Point'],
            required : true
        },
        coordinates : {
            type: [Number],
            required:  true
        }
        
    },
    bookingHistory : {
        type: [bookingHistoryScheme],
        default : undefined,
        required : false
    }
    
}, {storeSubdocValidationError: false}));

export default model;

function isUInt(value: number): boolean {
    if(value != Math.round(value) || value < 0)
        return false;
    return true;
}