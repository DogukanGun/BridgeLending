const graphqlHttp = require("express-graphql");
const express = require('express');
const uniswapController = require("./controller/uniswap");
const compoundController = require("./controller/compound");
const aaveController = require("./controller/aave");


const app = express();

app.get("/uniswap/position",uniswapController.getUniswapPositionData);
app.get("/uniswap/pools",uniswapController.getUniswapPoolData);
app.get("/uniswap/analysis",uniswapController.getUniswapPoolData);

app.get("/compound/markets",compoundController.getCompoundData);

app.get("/aave/analysis",aaveController.getAaveData);

app.listen(8089);