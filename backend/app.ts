const graphqlHttp = require("express-graphql");
const express = require('express');
const uniswapController = require("./controller/uniswap");


const app = express();

app.get("/uniswap/position",uniswapController.getUniswapPositionData);
app.get("/uniswap/pools",uniswapController.getUniswapPoolData);

app.listen(8089);