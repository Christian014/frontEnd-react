import './style.js';
import { Container, Links } from './style.js';

import { Tag } from '../../components/tag/index.jsx'
import { Section } from '../../components/section/index.jsx'
import { Header } from '../../components/header/index.jsx';
import { Button } from '../../components/button/index.jsx';


export function Details(){
  return (

    <Container>

      <Header/>

      <Section title = "Links Úteis" >

        <Links>

          <li><a href="#">www.rocketseat.com.br/</a></li>
          <li><a href="#">www.rocketseat.com.br/</a></li>

        </Links>
        
      </Section>

      <Section title = "Marcadores" >
        <Tag title="React.js" />
        <Tag title="Node.js" />
      </Section>

      <Button title="Voltar"/>

    </Container>
  )
}
