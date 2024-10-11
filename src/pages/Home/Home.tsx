import { Button } from "../../components/Button/Button.tsx";

export function Home()
{
    return (
        <>
            <h1>History</h1>
            <div>
                <Button variant="blue" label="botao 1"></Button>
                <Button variant="green" label="botao 2"></Button>
                <Button variant="blue" label="botao 3"></Button>
                <Button variant="pink" label="botao 4"></Button>
            </div>
        </>
    )
}