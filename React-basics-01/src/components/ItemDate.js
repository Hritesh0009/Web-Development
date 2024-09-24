// Defining the ItemDate functional component
import './ItemDate.css';


// Defining the ItemDate functional component
function ItemDate(props) {
    // Destructuring the day, month, and year from props
    const day = props.day;   // Extracting the day prop
    const month = props.month; // Extracting the month prop
    const year = props.year;   // Extracting the year prop

    // Rendering the component
    return (
        <div className='mfg-date'> {/* Main container for the date */}
            <span>{day}</span>   {/* Displaying the day */}
            <span>{month}</span>  {/* Displaying the month */}
            <span>{year}</span>   {/* Displaying the year */}
            {props.children}      {/* Rendering any child elements passed to ItemDate */}
        </div>
    );
}


// Exporting the ItemDate component for use in other files
export default ItemDate;