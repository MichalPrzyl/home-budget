import { useState, useEffect } from "react";



const CategoryTable = (props) => {
    
    return (
        <div>
            <ul>
                {props.data.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        </div>
    )
}

export default CategoryTable;