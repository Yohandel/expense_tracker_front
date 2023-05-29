import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import { useEffect } from 'preact/hooks'


ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)


const Charts = () => {

    const { getIncomes, getExpenses, incomes, expenses } = useGlobalContext()
    useEffect(() => {
        getExpenses()
        getIncomes()
    }, [])

    const displayLbales = () => {
        let labels = []

        if (incomes.length > expenses.length) {
            return labels = incomes.map((income) => {
                const { date } = income
                return dateFormat(date)
            })
        }
        else if (expenses.length > incomes.length) {
            return labels = expenses.map((expense) => {
                const { date } = expense
                return dateFormat(date)
            })
        }
    }


    const data = {
        labels: displayLbales(),
        datasets: [
            {
                label: 'Expenses',
                data: [...expenses.map((expense) => {
                    const { amount } = expense
                    return amount
                })],
                backgroundColor: 'rgba(252, 246, 249, 0.78)',
                tension: .2,
                borderColor: 'red',
            },
            {
                label: 'Incomes',
                data: [...incomes.map((income) => {
                    const { amount } = income
                    return amount
                })],
                backgroundColor: 'rgba(252, 246, 249, 0.78)',
                tension: .2,
                borderColor: 'green',
            },

        ]
    }

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;
export default Charts