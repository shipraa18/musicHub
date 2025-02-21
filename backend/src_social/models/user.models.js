import express from 'express';
import mongoose from 'mongoose';


const userSchema=new mongoose.Schema({
          name:{
                    type:String,
                    required: true,
                    trim: true
          },
          email:{
                    type: String,
                    email: true,
                    required:true,
          },
          username: {
                    type: String,
                    required: true,
                    unique: true,
          },
          password: {
                    type: String, 
                    required: true,
          },
          avatar:
          {
                    type: String,
                    required: true
          },
          coverImage:
          {
                    type: String, 
          },
          refreshToken:
          {
                    type: String,
          },
          followers:
          {
                    type: Array,
                    deafult: []
          },


})