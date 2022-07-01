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

            <div id="itens">
                <input type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)} />
                <label>{item.name} - {item.done.toString()}</label>

            </div>
            <div>
                <label>{item.id}</label>
            </div>
        </Container>

    )
}
