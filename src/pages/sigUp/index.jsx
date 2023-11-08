import { Container, Form, BackgroundImg } from "./style";
import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/button/index";
import { Input } from "../../components/input/index";

export function SigUp(){
    return (
        <Container>
            <BackgroundImg/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação Para Salvar e Gerenciar Seus Links Uteis</p>
                <h2>Crie Sua Conta</h2>


                <Input placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Cadastrar" />

                <a href="#">
                    Voltar para Login
                </a>
            </Form>

            
        </Container>
    );
};