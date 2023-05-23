const axios = require('axios');
import { Request, Response } from 'express';

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

const uniswapV3 = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"

exports.getUniswapPositionData = async (req: Request, res: Response)=> {
  try {
    const response = await axios.post(uniswapV3, {
      query: positionQuery,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

exports.getUniswapPoolData = async (req: Request, res: Response)=> {
    try {
      const response = await axios.post(uniswapV3, {
        query: poolQuery,
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  };
  