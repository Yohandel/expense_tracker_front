import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../context/globalContext'
import { useEffect } from 'preact/hooks'
import { dollar } from '../../utils/Icons'
import './expense.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpenseForm from './ExpenseForm'

const Expenses = () => {
    const { getExpenses, expenses, deleteExpense, totalExpense } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [])

    return (

        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expenses: <span>-{dollar}{totalExpense()}</span> </h2>
                <div className="expense-content">
                    <div >
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense
                            return <ExpenseItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor='var(--color-delete)'
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
display: flex;
overflow: hidden;

.total-expense{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-delete);
    }
}
.expense-content{
    display: flex;
    
    gap: 2rem;
    .expenses{
        flex: 1;
        height: 65vh;
        overflow-y: auto;
        
    }
    
}
`

export default Expenses