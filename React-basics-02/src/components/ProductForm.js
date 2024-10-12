import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props) {
  const [newTitle, setTitle] = useState(""); // line 6 & 7 shows us, how to handle multiple states (by adding single lines / singlehandedly)
  const [newDate, setDate] = useState(""); // here we're handling title and date states.

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    //console.log(event.target.value); //by this what ever we write is printed on console
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); // preventDefault is used to restrict default behavior of form
    // after clicking submit,we don't want to take any action, that's why we applied prevenDefault() on our onSubmit event.
    // we want to do the action which is written in submitHandler(). so for that we must prevent its default action.

    // we want to print our data in form of object.
    const productData = {
      title: newTitle,
      date: newDate,
    };

    //console.log(productData); // here we're printing our data in form of objects
    props.onSaveProduct(productData); //directly we call our prop from onSaveProduct function in NewProduct

     setTitle(""); // for emptying Title after use .
     setDate(""); //for emptying Date after use .
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product_controls">
        <div className="new-product_control">
          <label>Title</label>
          <input
            type="text"
            //it links newTitle to the UI
            value={newTitle} 
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-product_control">
          <label>Date</label>
          <input
            type="date"
            //It links new Date to the UI
            value={newDate}
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2023-12-12"
          ></input>
        </div>

        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;