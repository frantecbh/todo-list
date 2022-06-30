import { useState } from "react";
import { ItemList } from "../Dashboard";
import { Container } from "./styles";

type PropsItemList = {

    item: ItemList
}


export function ListItem({ item }: PropsItemList) {

    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <Container done={isChecked}>
            <input type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)} />
            <label>{item.name}</label>
        </Container>

    )
}
