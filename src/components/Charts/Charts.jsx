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
    Legend,
    BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import { useEffect } from 'preact/hooks'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

const Charts = () => {

    const { getIncomes, getExpenses, incomes, expenses } = useGlobalContext()
    const allMetrics = [...incomes, ...expenses]

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };

    useEffect(() => {
        getExpenses()
        getIncomes()
    }, [])

    const displayLbales = () => {
        let labels = []
        return labels = allMetrics.map(metric => {
            const { date } = metric
            return dateFormat(date)
        })
    }

    const displayIncomesData = () => {
        return incomes.map(income => {
            const { date, amount } = income
            return {
                x: dateFormat(date),
                y: amount
            }
        })
    }

    const displayExpensesData = () => {
        return expenses.map(expense => {
            const { date, amount } = expense
            return {
                x: dateFormat(date),
                y: amount
            }
        })
    }

    const data = {
        labels: displayLbales(),
        datasets: [
            {
                label: 'Income',
                data: displayIncomesData(),
                backgroundColor: '#2e992e',
                tension: .2,
                order:1
            },
            {
                label: 'Expense',
                data: displayExpensesData(),
                backgroundColor: '#ea2c2c',
                tension: .2,
                order:5
            },


        ]

    }

    return (
        <ChartStyled>
            <Bar data={data} options={options} />
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