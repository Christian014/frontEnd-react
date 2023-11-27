import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { Header } from "../../components/header/index";
import { Section } from "../../components/section/index";
import { TextArea } from "../../components/TextArea/index";
import { NoteItem } from "../../components/noteItem/index";

export function New(){
    return (
        <Container>
            <Header/>

            <main>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input placeholder="Titulo"/>
                <TextArea placeholder="Observações"/>

                <Section title="links-uteis">
                    <NoteItem value="www.youtube.com"/>
                    <NoteItem value="Novo Link" isNew/>
                </Section>

                
                <Section title="marcadores">
                    <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem value="react" isNew/>
                    </div>
                </Section>

                <Button title="Salvar" />
            </Form>
            </main>
        </Container>
    )
}