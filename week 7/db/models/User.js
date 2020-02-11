const express = require('express');
const mongoose = require('mongoose');

module.exports=mongoose.model('User',{
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    }
})
