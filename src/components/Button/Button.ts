import styled from 'styled-components';

interface ButtonContainerProps
{
    variant: "blue" | "green" | "purple" | "pink";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${(props) => props.variant};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`