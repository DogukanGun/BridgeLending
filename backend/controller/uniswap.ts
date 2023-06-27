const axios = require('axios');
import { Request, Response } from 'express';
import { sendGraphqlRequest } from '../utils/graphql.request';

const positionQuery = `
  query HomeData {
    positions {
      owner
      liquidity
      pool {
        volumeToken0
        volumeToken1
        id
        liquidity
        token1 {
          name
          volume
          totalValueLocked
          symbol
        }
        token0 {
          name
          volume
          totalValueLocked
          symbol
        }
      }
    }
    tokenHourDatas {
      priceUSD
      low
      high
      volume
      token {
        name
        symbol
      }
    }
  }
`;

const poolQuery = `
    query HomeData {
        pools {
        liquidity
        token1 {
            name
            symbol
            totalSupply
            volume
        }
        token0 {
            name
            symbol
            totalSupply
            volume
        }
        id
        }
    }
`

const uniswapAnalysis = `
  query MyQuery {
    uniswapDayDatas(first: 30) {
      date
      feesUSD
      tvlUSD
      txCount
      volumeETH
      volumeUSD
      volumeUSDUntracked
      id
    }
    transactions(first: 4) {
      gasPrice
      gasUsed
      swaps {
        token0 {
          totalSupply
          id
          name
        }
        token1 {
          name
          totalSupply
          id
        }
        amountUSD
        transaction {
          blockNumber
          id
        }
        id
      }
      id
    }
    tokenDayDatas {
      feesUSD
      date
      high
      low
      open
      priceUSD
      volumeUSD
      totalValueLockedUSD
      token {
        name
        totalSupply
        totalValueLockedUSD
        volumeUSD
        id
      }
      id
    }
    poolDayDatas {
      date
      feesUSD
      high
      id
      liquidity
      low
      open
      token0Price
      token1Price
      volumeToken0
      volumeToken1
    }
  }
`

const uniswapV3 = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"

exports.getUniswapPositionData = async (req: Request, res: Response) => {
  const response = await sendGraphqlRequest(uniswapV3,positionQuery)
  if(response == ""){
    res.status(500).json({ error: 'Something went wrong.' });
  }
  res.json(response);
};

exports.getUniswapPoolData = async (req: Request, res: Response) => {
  const response = await sendGraphqlRequest(uniswapV3,poolQuery)
  if(response == ""){
    res.status(500).json({ error: 'Something went wrong.' });
  }
  res.json(response);
};


exports.getUniswapAnalysis = async (req:Request, res:Response) => {
  const response = await sendGraphqlRequest(uniswapV3,uniswapAnalysis)
  if(response == ""){
    res.status(500).json({ error: 'Something went wrong.' });
  }
  res.json(response);
}


