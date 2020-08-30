import styled from 'styled-components';
import {theme} from '../pages/_app';

export const WelcomeText = styled.div`
    text-align: center;
    font-size: 40px;
    transform: skew(-9deg);
    font-family: sans serif;
`;

export const WelcomeForm = styled.form`
    line-height: 1.5;
    font-weight: 600;

    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-color: black;
    

    fieldset {
        background: ${theme.colors.backgroundLighter};
        
    }

    label {
        display: block;
        text-align: center;
        margin-bottom: 1rem;
    }

    input {
        margin-left: 1rem;
    }

    button {
        background: ${theme.colors.backgroundCompliment};
        font-size: .75rem;
        padding: 1rem;
        border-radius: .88rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;
