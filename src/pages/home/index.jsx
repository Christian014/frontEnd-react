import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header/index';
import { ButtonText } from '../../components/buttonText';

export function Home(){

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title= "Todos" isActive /></li>
                <li><ButtonText title= "Reactjs"/></li>
                <li><ButtonText title= "Nodejs" /></li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>
            
            <NewNote>

            </NewNote>
            
        </Container>
    );

};