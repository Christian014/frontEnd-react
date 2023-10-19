import './style.js'
import { Container } from './style.js'
import { Button } from '../../components/button/index.jsx'

export function Details(){
  return (
    <Container>
      <h1>HELLO WORLD</h1>

      <Button title="Cadastrar" loading/>
      <Button title="Deletar"/>
    </Container>
  )
}
