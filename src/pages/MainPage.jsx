import { useState } from "react";
import ProductCard from "../components/mainPage/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const MainPage = () => {
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);

    return (
        <>
        <Button onClick={() => navigate('/add')}>Add product</Button>
            <div className="products-container">
            {products.map((el,idx) => (
                <ProductCard key={idx} productName={el.name} productId={el.id} />
            ))}
            </div>
        </>
    )
}
export default MainPage;