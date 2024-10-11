import { ButtonContainer } from "./Button";

interface ButtonProps 
{
    variant: "blue" | "green" | "purple" | "pink";
    label: string;
}

export function Button({ variant, label }: ButtonProps)
{
    return (
        <ButtonContainer variant={variant}>{label}</ButtonContainer>
    )
}