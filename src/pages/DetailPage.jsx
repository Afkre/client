import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Button, Card} from 'react-bootstrap';

const DetailPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();
    const { products, deleteProduct } = useContext(ProductContext);

    const deleteItem = () => {
        deleteProduct(id);
        navigate('/')
    }
    useEffect(() => {
        const currentProduct = products.filter((el) => el.id == id)
        setProduct(currentProduct[0])
    }, [])

    return (
        <>
            <Button onClick={() => navigate('/')}>Go to products</Button>
            <Card style={{ width: '40rem', height : '40rem', margin:'100px auto' }}>
                <Card.Img variant="top" src="/vegetable.jpeg" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price : {product.price}
                    </Card.Text>
                    <Card.Text>
                        Category : {product.category}
                    </Card.Text>
                </Card.Body>
                <Card.Body style={{display:'flex', justifyContent:'center'}}>
                    <Button style={{marginRight:'10px'}}><Link style={{textDecoration:'none', color:'white'}} to={`/update/${product.id}`}>Update</Link></Button>
                    <Button onClick={() => deleteItem()} style={{marginLeft:'10px'}}>Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default DetailPage;