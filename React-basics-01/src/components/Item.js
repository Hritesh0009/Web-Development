// Import the CSS file for styling this component
import './Item.css';

// Create a functional component named Item
function Item(props) {
    // Get the item name from props
    const ItemName = props.name; // Extracting the name prop

    // Render the component
    return (
        <div> {/* Main container for the item */}
            <p className='nirma'>{ItemName}</p> {/* Display the item name */}
            {props.children} {/* Render any additional content passed to this component */}
        </div>
    );
}

// Export the Item component so it can be used in other files
export default Item;