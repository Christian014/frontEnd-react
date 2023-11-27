import { Link } from "react-router-dom";
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Form, BackgroundImg } from "./style";

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

                <Link to="/register">
                    criar conta
                </Link>
            </Form>

            <BackgroundImg/>
        </Container>
    );
};