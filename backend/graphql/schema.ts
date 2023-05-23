const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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
`) 