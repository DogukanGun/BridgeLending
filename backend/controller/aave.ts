import { sendGraphqlRequest } from "../utils/graphql.request";
import { Request, Response } from 'express';

const aaveAnalysis = `
    query MyQuery {
        reserves {
        aTokenTotalSupply
        availableLiquidity
        averageStableBorrowRate
        baseLTVasCollateral
        baseVariableBorrowRate
        borrowingEnabled
        borrowHistory {
            borrowRate
            borrowRateMode
            timestamp
        }
        deposits {
            amount
        }
        totalLiquidity
        totalLiquidityAsCollateral
        totalBorrowsStable
        totalBorrows
        }
        flashLoans {
        amount
        id
        pool {
            id
        }
        timestamp
        target
        totalFee
        }
        deposits {
        id
        pool {
            id
        }
        amount
        timestamp
        }
        borrows {
        amount
        id
        pool {
            id
        }
        }
    }
`
const aave = "https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw"

exports.getAaveData = async (req: Request, res: Response) => {
    const response = await sendGraphqlRequest(aave, aaveAnalysis)
    if (response == "") {
        res.status(500).json({ error: 'Something went wrong.' });
    }
    res.json(response);
};