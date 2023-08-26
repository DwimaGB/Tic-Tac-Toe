import { useState } from "react"

export default function Square(props){


    return <button onClick={props.updateBoard}>{props.value}</button>
}
