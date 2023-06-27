import { Request, Response } from 'express';
import { sendGraphqlRequest } from "../utils/graphql.request";

const marketQuery = `
    query {
        markets {
            borrowRate
            cash
            collateralFactor
            exchangeRate
            interestRateModelAddress
            name
            reserves
            supplyRate
            symbol
            id
            totalBorrows
            totalSupply
            underlyingAddress
            underlyingName
            underlyingPrice
            underlyingSymbol
            reserveFactor
            underlyingPriceUSD
        }
    }
    
`

const compound = "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2"

exports.getCompoundData = async (req: Request, res: Response)=> {
  const response = await sendGraphqlRequest(compound,marketQuery)
  if(response == ""){
    res.status(500).json({ error: 'Something went wrong.' });
  }
  res.json(response);
};