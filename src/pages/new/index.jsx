import { Header } from "../../components/header/index";
import { Container, Form } from "./style";
import { Input } from "../../components/input/index";
import { TextArea } from "../../components/TextArea/index";
import { Section } from "../../components/section/index";
import { NoteItem } from "../../components/noteItem/index";

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
                <TextArea placeholder="Observações"/>

                <Section title="links-uteis">
                    <NoteItem value="www.youtube.com"/>
                    <NoteItem value="Novo Link" isNew/>
                </Section>
            </Form>
            </main>
        </Container>
    )
}