import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout} from "./style.js";

export function Header(){
    return(
        <Container>

            <Profile to="/profile">
                <img src="https://github.com/Christian014.png" alt="Foto do usuario" />
                <div>

                    <span>
                        Bem-Vindo
                    </span>

                    <strong>
                        Christian Lopes
                    </strong>
                    
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
           </Logout>

        </Container>
    );
}