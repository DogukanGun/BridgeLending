const graphqlHttp = require("express-graphql");
const express = require('express');
const uniswapController = require("./controller/uniswap");
const compoundController = require("./controller/compound");


const app = express();

app.get("/uniswap/position",uniswapController.getUniswapPositionData);
app.get("/uniswap/pools",uniswapController.getUniswapPoolData);

app.get("/compound/markets",compoundController.getCompoundData);


app.listen(8089);