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