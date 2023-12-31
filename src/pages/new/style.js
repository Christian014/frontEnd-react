import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "Header"
                         "content";

    
    
`;


export const Form = styled.form `
    max-width: 550px;
    margin: 38px auto;

    .tags{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        > a{
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`;