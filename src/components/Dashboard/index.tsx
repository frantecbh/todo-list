
import { useState } from 'react'
import { AddItem } from '../AddItem';
import { Header } from '../Header'
import { ListItem } from '../ListItem';
import { Area, Container } from './style'


export type ItemList = {
    id: number;
    name: string;
    createdAt: string;
    done: boolean;

}

export function Dashboard() {

    const [list, setList] = useState<ItemList[]>([
        { id: 1, name: 'Comprar o pao na padaria', createdAt: new Date().toString(), done: false },
        { id: 2, name: 'Comprar bolo na padaria', createdAt: new Date().toString(), done: false }
    ])


    function hadleAddTask(taskname: string) {
        let newList = [...list]

        newList.push({
            id: list.length + 1,
            name: taskname,
            createdAt: new Date().toString(),
            done: false

        })
        console.log(newList)
        setList(newList)


    }

    return (

        <Container>
            <Header />
            <Area>

                <AddItem onSend={hadleAddTask} />

                {
                    list.map((item) => (
                        <ListItem key={item.id} item={item} />
                    ))
                }

            </Area>
        </Container>

    )
}
