//mongodb+srv://181fa04376:Kalyan%40150@cluster0.q839a.mongodb.net/sample

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema');
const root = require('./resolver');
(async()=>{
    const app = express();
    await mongoose.connect("");//place your mongo url here
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));
   
    app.listen(4369,()=>{
        console.log("Server started at port 4369");
    })
})()