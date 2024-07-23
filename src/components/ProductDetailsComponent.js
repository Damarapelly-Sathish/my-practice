import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import '../StyleSheets/ProductPage.css';
import { BreadcrumbComponent } from '../App';
import { Rating } from 'primereact/rating';
import { RadioButton } from 'primereact/radiobutton';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Routes, Route, Link,useLocation} from 'react-router-dom';


const products = [
    { id: 1, name: 'Product 1', image: ['/pexels-harsh-raj-gond-218020-1485031.jpg','https://via.placeholder.com/150','https://via.placeholder.com/150'], description: 'Elevate your everyday style with the voiz - the ultimate in fashion-meets-function.Premium denim construction for long-lasting wearTrendy, figure-flattering cut,Stretchy, breathable fabric for all-day comfort, Coordinating shirt for a complete, polished look' ,size: ['xl','l','s','m']},
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'This is Product 2', size: 'l'}
    // Add more products as needed
  ];

  
function ProductDetailsComponent () {
    const { id } = useParams();
    console.log(id)
    const product = products.find(p => p.id === parseInt(id));

    const [selectedColor, setSelectedColor] = useState(null);
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
    const handleColorChange = (color) => {
    setSelectedColor(color);
    console.log(`Selected color: ${color}`);
    };

    if (!product) {
    return <div>Product not found</div>;
    }


    return(
        <>
      <div className="product-page">
      
      <div style={{display:"flex",justifyContent: "space-between",alignItems:"flex-start"}}>
      <div style={{marginRight:"20px"}}>
        <img src="/pexels-nietjuh-934070.jpg"  style={{width:"500px",height:"500px"}}/>
      </div>
      <div className="product-image" style={{flexDirection:"column"}}>
        { product.image.map(image =>  (<img src={image} style={{marginBottom:"10px",width:"150px"}}/>))}
      </div>
      </div>

      <div className="product-details">
      <BreadcrumbComponent />

      <p>{product.name}</p>

      <Rating value={5} readOnly cancel={false} />

      <p>{product.description}</p>

     <div style={{marginBottom:"10px"}}>
     <h4>color</h4>
      {colors.map(color => (    
          <RadioButton
            inputId={color}
            name="color"
            value={color}
            onChange={(e) => handleColorChange(e.value)}
            checked={selectedColor === color}
            className="color-radio"
            style={{ "backgroundColor": color.toLowerCase()}}
          />
      ))}
      </div>
      
      <div>
      { product.size.map (size => (<Button label={size} severity="Info"text raised style={{marginRight:"10px",}}/>))}
      </div>  
      
      <div>
      <Link to={`/payment`}>{<Button label="Buy Now" icon="pi pi-check" className="p-button-success buy-button" />}</Link>
      <Button label="Add to Cart" icon="pi pi-shopping-cart" className="p-button-secondary cart-button" />
      </div>

     </div>
      </div>
        </>
    )
}

export default ProductDetailsComponent;