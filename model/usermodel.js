const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        tpye:String,      
    },
    Created_at:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("user",userSchema);