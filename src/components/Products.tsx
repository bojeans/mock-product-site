const Products = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json();
    console.log(result);

    return(
        <div>
            <p>placeholder paragraph component</p>
        </div>
    )
}

export default Products;