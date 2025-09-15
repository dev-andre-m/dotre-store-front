import {useEffect, useState} from "react";

function App() {

    const [products, setProducts] = useState<{name: string, price: number}[]>([])

    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const addProduct = () => {
        setProducts(prevState => [...prevState,
            {name: 'product' + (prevState.length + 1), price: prevState.length * 100 + 100}])
    }

    return (
        <div>
            <h1 style={{color: 'red'}}>Dotre Store</h1>
            <ul>
                {products.map((item, index) => (
                    <li key={index}> {item.name} - {item.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </div>
    )
}

export default App
