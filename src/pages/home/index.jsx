import { Input } from '../../components/input';
import {FiPlus, FiSearch  } from "react-icons/fi";
import { Note } from "../../components/note/index"
import { Header } from '../../components/header/index';
import { Section } from "../../components/section/index"
import { ButtonText } from '../../components/buttonText';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';

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
                <Input placeholder='pesquisar pelo titúlo' icon ={FiSearch} />
            </Search>

            <Content >
                <Section title = 'Minhas notas'>
                    <Note data ={{
                        title: "React",
                        tags: [
                            {id: "1", name: "react"},
                            {id: "2", name: "react"}
                        ]
                    }}>
                        
                    </Note>
                </Section>
            </Content>
            
            <NewNote to="/new">
                        <h1>+ incluir nota</h1>
            </NewNote>
            
        </Container>
    );

};