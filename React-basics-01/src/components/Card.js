// Import the CSS file for styling this component
import './Card.css';

// Create a functional component named Card
function Card(props) {
    // Render the component
    return (
        <div className="card"> {/* Container with the class 'card' for styling */}
            {props.children} {/* Render any child elements passed to this component */}
        </div>
    );
}

// Export the Card component so it can be used in other files
export default Card;