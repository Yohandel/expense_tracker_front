import { useState } from 'preact/hooks'
import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import { SweetAlert } from '../../utils/SweetAlert';
import { Form as formikForm, ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
    const { addIncome } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    })

    const { title, amount, date, category, description } = inputState

    const sweet = new SweetAlert()
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })

    }

    const handleSubmit = values => {
        e.preventDefault()
        console.log(values);
        // addIncome(inputState)
        // setInputState({
        //     title: '',
        //     amount: '',
        //     date: '',
        //     category: '',
        //     description: ''
        // })
        // sweet.Alert('Income Created', 'Income Created Successfully', 2500, 'success')
    }

    return (
        <Formik
            initialValues={inputState}
            validationSchema={yupValidation}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormStyled >
                    <div className="input-control">
                        <label>Title</label>
                        <Field
                            type="text"
                            name='title'
                            placeholder='Income Title'
                            id='title'
                        />
                    </div>
                    <ErrorMessage name='title' />
                    <div className="input-control">
                        <label>Amount</label>
                        <Field
                            type="text"
                            name='amount'
                            placeholder='Income Amount'
                            id="amount"
                        />
                    </div>
                    <ErrorMessage name='amount' />
                    <div className="input-control">
                        <Field as="textarea"
                            name="description"
                            placeholder='Add A Description'
                            id="description"
                            cols="32"
                            rows="4"
                        ></Field>
                    </div>
                    <ErrorMessage name='description' />
                    <div className="input-control">
                        <label>Date</label>
                        <Field
                            type="date"
                            name='date'
                            id="date"

                        />
                    </div>
                    <ErrorMessage name='date' />
                    <div className="selects input-control">
                        <Field as="select" name="category" id="category" >
                            <option value="" disabled >Select Option</option>
                            <option value="salary">Salary</option>
                            <option value="freelancing">Freelancing</option>
                            <option value="investments">Investiments</option>
                            <option value="stocks">Stocks</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bank">Bank Transfer</option>
                            <option value="youtube">Youtube</option>
                            <option value="other">Other</option>
                        </Field>
                    </div>
                    <ErrorMessage name='category' />
                    <div className="submit-btn">
                        <Button
                            type={"submit"}
                            disabled={isSubmitting}
                            name={'Add Income'}
                            icon={plus}
                            bPad={'.8rem 1.6rem'}
                            bRad={'30px'}
                            bg={'var(--color-accent'}
                            color={'#fff'}
                        />
                    </div>
                </FormStyled>
            )}
        </Formik>
    )
}

const yupValidation = Yup.object({
    title: Yup.string().required("This field is required"),
    amount: Yup.number().min(1, "The amount must be more than 0 or a positive number").required("This field is required"),
    date: Yup.date().required("This field is required"),
    category: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required")
})

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-start;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form