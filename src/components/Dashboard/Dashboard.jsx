import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Charts from '../Charts/Charts'

const Dashboard = () => {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats com">
                    <div className="chart-con">
                        <Charts/>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>

    )
}

const DashboardStyled = styled.div`
    
`
export default Dashboard