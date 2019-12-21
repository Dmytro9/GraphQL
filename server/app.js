const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect( 
  "mongodb://dimapol:password66@ds147420.mlab.com:47420/graphgl",
  options,
  () => {
    console.log("connected to db");
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true // to use graphical tool
  })
);

app.listen(4000, () => {
  console.log("server on 4000");
});
