import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const auth = new Schema({
    userId: {
        type: String,
        default : `NEW-${moment().valueOf().toString()}`
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNo :{
        type: Number,
        default : 0
    },
    password :{
        type: String,
    },
    date: {
        type: Date,
        default: moment().toDate()
    }
});

export default mongoose.model('Auth', auth);