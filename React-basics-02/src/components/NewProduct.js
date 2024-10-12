import './NewProduct.css';
import ProductForm from './ProductForm';


function NewProduct(props) 
{
  function saveProduct(product) 
  {
    console.log("i am inside new product");
    console.log(product);

    //calling parent function
    props.pranay(product);  //we call pranay prop in app.js 
  }

  return 
  (
    <div className="new-product">
      <ProductForm onSaveProduct={saveProduct} />
      {/*above we pass a function to a prop in NewProduct*/}   
    </div>
  );
}

export default NewProduct;