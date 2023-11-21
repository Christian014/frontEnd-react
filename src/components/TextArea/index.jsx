import { Container } from "./style";

export function TextArea({value, ...Rest}){
    return(
        <Container {...Rest}>
            {value}
        </Container>
    )
}