import styled from "styled-components";

type ContainerProps = {
    done: boolean
}
export const Container = styled.div(({ done }: ContainerProps) => (

    `display: flex;
    align-items: center;
    justify-content: space-between ;
    background-color: var(--text-body);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    
  

    input {
        width: 25px;
        height: 25px;        
    
    }
    
    label{
        margin-left: 10px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

  

    
    
        
    
    `



))