import { Container } from "./style.js";

export function Button({title, loading= false }){
    return (
        <Container type = "button" >
           {loading ? 'carregando..' : title}
        </ Container>
    );
}