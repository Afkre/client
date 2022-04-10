import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProductCard = ({ productName, productId }) => {
    return (
        <>
             <Card className='product-card' style={{width:'250px'}}>
                <Card.Img  variant='top' src='vegetable.jpeg' />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        Fresh {productName} from our lovely farm
                    </Card.Text>
                    <Button style={{display:'block', margin:'auto'}}>
                        <Link to={`/detail/${productId}`} style={{color : 'white', textDecoration:'none'}}>
                        Details
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductCard;