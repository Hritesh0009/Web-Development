import './ProductItem.css';
import ProductDate from './ProductDate';
import Card from './Card';
import React, {useState} from 'react';

const ProductItem = (props) => {
    // Declare state variable `title` with initial value from props and a function `setTitle` to update it.
    const [title, setTitle] = useState(props.title);

    // Uncommented line for comparison; it's not needed because we are using state now.
    // let title = props.title;

    // Function to handle button click events
    function clickHandler() {
        // This line changes the `title` using setTitle hook (state updates trigger re-render).
        setTitle("popcorn");

        // Logs a message to the console when the button is clicked.
        console.log("clicked on Add to Cart");
    }

    // The component's JSX structure
    return (
        <Card className="product-item">
            {/* Render the ProductDate component and pass the date prop */}
            <ProductDate date={props.date}></ProductDate>
            
            {/* Container for product description */}
            <div className='product-item__description'>
                {/* Render the title, which is stored in the state */}
                <h2>{title}</h2>
            </div>
            
            {/* Button element with an onClick event that triggers clickHandler function */}
            <button className='btn' onClick={clickHandler}>add to cart</button>
        </Card>
    );
}

export default ProductItem;