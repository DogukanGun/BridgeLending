import axios from "axios";
import { Request, Response } from 'express';

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
  try {
    const response = await axios.post(compound, {
      query: marketQuery,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};