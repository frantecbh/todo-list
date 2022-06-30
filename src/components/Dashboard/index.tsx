
import { useState } from 'react'
import { Header } from '../Header'
import { ListItem } from '../ListItem';
import { Area, Container } from './style'


export type ItemList = {
    id: number;
    name: string;
    done: boolean;

}

export function Dashboard() {

    const [list, setList] = useState<ItemList[]>([
        { id: 1, name: 'Comprar o pao na padaria', done: false },
        { id: 2, name: 'Comprar bolo na padaria', done: false }
    ])

    return (

        <Container>
            <Area>
                <Header />


                {
                    list.map((item) => (
                        <ListItem key={item.id} item={item} />
                    ))
                }

            </Area>
        </Container>

    )
}
