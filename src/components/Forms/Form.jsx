
import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import { Form as FormikForm, ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'
import './Form.css'

const Form = () => {
    const { addIncome } = useGlobalContext()

    const initialValues = { title: '', amount: '', date: '', category: '', description: '' }

    const handleSubmit = (values, actions) => {
        const { amount } = values
        addIncome({ ...values, amount: parseInt(amount) })
        actions.resetForm();

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={yupValidation}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, isValid }) => (
                <FormikForm className='incomesForm' >
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
                            <label>Description</label>
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
                            disabled={!isValid || isSubmitting}
                            name={'Add Income'}
                            icon={plus}
                            bPad={'.8rem 1.6rem'}
                            bRad={'30px'}
                            bg={'var(--color-accent'}
                            color={'#fff'}
                        />
                    </div>

                </FormikForm>
            )}
        </Formik>
    )
}

const yupValidation = Yup.object({
    title: Yup.string().required("This field is required"),
    date: Yup.date().required("This field is required"),
    category: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required")
})

export default Form