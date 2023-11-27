import { Link } from "react-router-dom";
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { Container, Form, BackgroundImg } from "./style";
import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";


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

                <Link to="/">
                    Voltar para Login
                </Link>
            </Form>

            
        </Container>
    );
};