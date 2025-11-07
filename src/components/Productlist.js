import useFetch from "../hooks/useFetch";

const Produclist = () =>{
    const {data, loading, error} = useFetch(" https://api.escuelajs.co/api/v1/products")

    if(loading) return <p className="loading ">Products Loading...</p>
    if(error) return <p className="error">Error: {error}</p>

    return(
        <div className="product-list">
            {data?.slice(0,48).map(product => (
                <div key={product.id} className="product-card" >
                    <img src = {product.images[0]} alt={product.title} />
                    <h3 className="title">{product.title}</h3>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Produclist