import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://calm-coast-29564.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return [products, setProduct]
}
export default useProduct; 