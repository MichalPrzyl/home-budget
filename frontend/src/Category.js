import Buttons from './Category/Buttons'
import CategoryTable from './Category/CategoryTable';
import { useState, useEffect } from "react";
import axios from 'axios';

const CategoryApp = (props) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/category')
        setData(response.data)
    }

    return (
        <div className="app">
            <Buttons
                getData={getData}
            />
            {/* <Table></Table> */}
            <CategoryTable
                getData={getData}
                data={data}
            />
        </div>
    )
}

export default CategoryApp;