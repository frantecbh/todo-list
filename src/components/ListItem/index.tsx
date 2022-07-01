import { useState } from "react";
import { ItemList } from "../Dashboard";
import { Container } from "./styles";

type PropsItemList = {

    item: ItemList
}


export function ListItem({ item }: PropsItemList) {

    const [isChecked, setIsChecked] = useState(item.done)
    // console.log(isChecked)
    return (
        <Container done={isChecked}>

            <div>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)} />
                <label>{item.name}</label>
            </div>


            <label className="item"><span>Criado em: </span>
                {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(item.createdAt)
                )}


            </label>

        </Container>

    )
}
