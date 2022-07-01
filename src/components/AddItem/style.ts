import styled from "styled-components";

export const Container = styled.div`

    margin: 20px 0;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 8px;

    display: flex;
    align-items: center;


    button{
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        width: 25px;
        height: 25px;

        
    }

    input{
        margin-left: 10px;
        background: transparent;
        border: 0px;
        outline: 0;
        padding: 10px;
        width: 100%;

        border-radius: 4px;

        color: var(--shape)
    }

    input::placeholder {
  color: #fff;
}


`;