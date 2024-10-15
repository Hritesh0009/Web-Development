import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props) {
  const [newTitle, setTitle] = useState(""); // line 6 & 7 shows us, how to handle multiple states (by adding single lines / singlehandedly)
  const [newDate, setDate] = useState(""); // here we're handling title and date states.

    // Event handler for title input changes
  function titleChangeHandler(event) {
    setTitle(event.target.value);  // Update newTitle state with the current value from the input field
    //console.log(event.target.value); //by this what ever we write is printed on console
  }

    // Event handler for date input changes
  function dateChangeHandler(event) {
    setDate(event.target.value); // Update newDate state with the current value from the input field
  }

  function submitHandler(event) 
{
    event.preventDefault(); // preventDefault is used to restrict default behavior of form
    // after clicking submit,we don't want to take any action, that's why we applied prevenDefault() on our onSubmit event.
    // we want to do the action which is written in submitHandler(). so for that we must prevent its default action.
    // we want to print our data in form of object.
     // Creating an object to hold the current form data (title and date)
    const productData = {
      title: newTitle, // Title from the input field
      date: newDate,   // Date from the input field
    };
    //console.log(productData); // here we're printing our data in form of objects
    props.onSaveProduct(productData); //directly we call our prop from onSaveProduct function in NewProduct

      // Reset the input fields to empty after form submission
     setTitle(""); // for emptying Title field after use .
     setDate(""); //for emptying Date field after use .
}

  return (
    <form onSubmit={submitHandler}> {/* Form element with submitHandler to handle form submission */}
    <div className="new-product_controls"> {/* Container for form controls (input fields) */}
      <div className="new-product_control"> {/* Div to group label and input for the title */}
        <label>Title</label> {/* Label for the title input field */}
        <input
          type="text" // Text input for entering the title
          value={newTitle} // Binds the input field value to newTitle state
          onChange={titleChangeHandler} // Calls titleChangeHandler when the input changes
        />
      </div>

 {/*Below div is for date */}
 <div className="new-product_control"> {/* Div to group label and input for the date */}
          <label>Date</label> {/* Label for the date input field */}
          <input
            type="date" // Date input for selecting a date
            value={newDate} // Binds the input field value to newDate state
            onChange={dateChangeHandler} // Calls dateChangeHandler when the input changes
            min="2023-01-01" // Setting a minimum date for selection
            max="2023-12-12" // Setting a maximum date for selection
          />
        </div>


  {/*Button */}
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;  // Exporting the ProductForm component to be used in other parts of the app