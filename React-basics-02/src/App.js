import "./App.css";
import Products from './components/ProductsMain.js';
import NewProduct from './components/NewProduct.js';


function App() {

  // Array of product details (product data)

  const products = 
  [
    {
      id: 'p1',
      title: "Nirma",
      amount: 100,
      date : "2021-8-10",
    },

    {
      id: 'p2',
      title: "surf excel",
      amount: 200,
      date: "2021-8-10",
    },

    {
      id: 'p3',
      title: "tide",
      amount: 130,
      date: "2021-8-10",
    },

    {
      id: 'p4',
      title: "arial",
      amount: 100,
      date: "2021-8-10",
    }

  ];


  //app.js=>NewProduct=>ProductForm then again from ProductForm we call NewProduct=> then from there we call props.pranay()  and the below function is executed
   // Function that will be passed down as a prop to NewProduct component
  // When invoked (in NewProduct), it logs some data to the console.
  function printProductData(data) {
    console.log("I am inside App.js");  // Logging a message to show execution
    console.log(data);  // Logging the passed data to the console
  }

  return (
    <div className="maindiv">
      {/* Rendering NewProduct component and passing printProductData function as the `hritesh` prop */}
      <NewProduct propDrilling={printProductData} />

      {/* Rendering Products component and passing the products array as the `items` prop */}
      <Products items={products} />
    </div>
  );
};

export default App;