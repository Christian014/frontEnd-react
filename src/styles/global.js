import { createGlobalStyle } from "styled-components";
const CreateGlobalStyle = createGlobalStyle;

export default CreateGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
        color:${({theme}) => theme.COLORS.WHITE};
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        outline: none;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    

    
`;