import styled from "styled-components";
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
    `
export const Input = styled(Field)`
    margin-top: 5px;
    `

export const FilterInput = styled.input`
    margin-top: 5px;
    `

export const Label = styled.label`
    display: flex;
    flex-direction: column;    
    margin-bottom: 10px;
    `

export const Button = styled.button`
    max-width: 100px;
    margin: 10px auto;
    `