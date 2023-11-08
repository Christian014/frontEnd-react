import { Container, Form, BackgroundImg } from "./style";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/button/index";
import { Input } from "../../components/input/index";

export function SigIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação Para Salvar e Gerenciar Seus Links Uteis</p>
                <h2>Faca Seu Login</h2>

                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Entrar" />

                <a href="#">
                    criar conta
                </a>
            </Form>

            <BackgroundImg/>
        </Container>
    );
};