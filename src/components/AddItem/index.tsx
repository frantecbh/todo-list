import React, { useState } from 'react'
import { Container } from './style'

import { BsPlusCircle } from 'react-icons/bs'

type PropsAddItem = {

    onSend: (taskname: string) => void

}

export function AddItem({ onSend }: PropsAddItem) {

    const [inputText, setInputText] = useState('')

    function createTask() {
        if (inputText === "") {
            return false
        }
        onSend(inputText)
        setInputText("")
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inputText !== '') {
            onSend(inputText)
            setInputText("")
        }
    }


    return (
        <Container>
            <button onClick={createTask}>
                <BsPlusCircle size={24} color='#fff' />
            </button>
            <input type="text"
                placeholder='Adicione uma tarefa...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
        </Container>
    )
}
