import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Charts from '../Charts/Charts'
import { dollar } from '../../utils/Icons'
import { useGlobalContext } from '../../context/globalContext'

const Dashboard = () => {
    const { totalIncome, totalExpense, totalBalance } = useGlobalContext()
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Charts />
                        <div className="amount-con">
                            <div className="income">
                                <h3>Total Income</h3>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h3>Total Expense</h3>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h3>Total Balance</h3>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">

                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>

    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
                margin-top: 2rem;
           
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 2.3rem;
                        font-weight: 700;
                    }
                }

                .expense{
                    p{
                        color: #df2b2b;
                    }
                }
                .income{
                    p{
                        color: #288828;
                    }
                }
                .balance{
                    p{
                        color: #288828;
                        
                        font-size: 2.3rem;
                    }
                }
            }
        }
        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;
export default Dashboard