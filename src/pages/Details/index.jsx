import './style.js';
import { Container, Links, Content } from './style.js';

import { Tag } from '../../components/tag/index.jsx'
import { Section } from '../../components/section/index.jsx'
import { Header } from '../../components/header/index.jsx';
import { Button } from '../../components/button/index.jsx';
import { ButtonText } from '../../components/buttonText/index.jsx'


export function Details() {
  return (

    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React.
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at, eum ab aliquid numquam assumenda, doloribus doloremque tenetur omnis velit delectus ullam pariatur aliquam quam, quae aspernatur. Quibusdam, eaque ipsum?
          </p>

          <Section title="Links Úteis" >

            <Links>

              <li><a href="#">www.rocketseat.com.br/</a></li>
              <li><a href="#">www.rocketseat.com.br/</a></li>

            </Links>

          </Section>

          <Section title="Marcadores" >
            <Tag title="React.js" />
            <Tag title="Node.js" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>

    </Container>
  )
}
