import React from 'react'
import styled from 'styled-components'
import {
    bitcoin, book, calender,
    card, circle, clothing,
    comment, dollar, food,
    freelance, medical, money,
    piggy, stocks, takeaway,
    trash, traveling, tv, users, yt
} from '../../utils/Icons'
import Button from '../Button/Button'
import { dateFormat } from '../../utils/dateFormat'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from 'react-tooltip'
import { SweetAlert } from '../../utils/SweetAlert'


const ExpenseItem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {


    const categoryIcon = () => {
        switch (category) {
            case 'salary': return money;

            case 'freelancing': return freelance;

            case 'investments': return stocks;

            case 'stocks': return users;

            case 'bitcoin': return bitcoin;

            case 'bank': return card;

            case 'youtube': return yt;

            case 'other': return piggy;

            default: return '';
        }
    }


    const expenseCatIcon = () => {
        switch (category) {
            case 'education': return book;

            case 'groceries': return food;

            case 'health': return medical;

            case 'subscription': return tv;

            case 'takeaway': return takeaway;

            case 'clothing': return clothing;

            case 'traveling': return traveling;

            case 'other': return circle;

            default: return '';
        }
    }


    
const sweet = new SweetAlert()

const deleteExpense = (expenseId) => {
    sweet.AlertConfirm('Delete Expense', 'Are you sure you want to delete this item?').then((result) => {
        console.log(result);
        if (result) {
            deleteItem(expenseId)
        }
    }).catch((err) => {
        
    });
}

    return (
        <ExpenseItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text ">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>{comment} {description}</p>



                    </div>
                    <a onClick={() => deleteExpense(id)}>
                        <i className="fa-solid fa-trash" data-tooltip-id='btn-delete' ></i>
                    </a>
                </div>
            </div>
            <Tooltip
                id="btn-delete"
                place="top"
                variant="error"
                content="Delete"
            />
        </ExpenseItemStyled>
    )
}



const ExpenseItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
         
            .text{
                display: flex;
                gap:1.5rem;
               
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }

        .fa-trash{
        cursor: pointer;
        margin-left: 1rem;
        align-self: center;
        }
    }
`;


export default ExpenseItem