import { Header } from "../../components/header/index";
import { Container, Form } from "./style";
import { Input } from "../../components/input/index";

export function New(){
    return (
        <Container>
            <Header/>

            <main>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <a href="/">Voltar</a>
                </header>

                <Input placeholder="Titulo"/>
            </Form>
            </main>
        </Container>
    )
}