import './App.css';
import './components/Item'
import Item from './components/Item'; // Importing Item component
import Form from './components/Form'; // Importing Form component
import ItemDate from './components/ItemDate'; // Importing ItemDate component
import Card from './components/Card'; // Importing Card component


// Main App component
function App() {
  // Sample data array containing items with their details
  const response = [
    // First item object
    {
      ItemName: "Nirma",
      ItemDay: "20",
      ItemMonth: "July",
      ItemYear: "2002"
    },
    // Second item object
    {
      ItemName: "Surf-excel",
      ItemDay: "22",
      ItemMonth: "December",
      ItemYear: "2008"
    },
    // Third item object
    {
      ItemName: "Ariel",
      ItemDay: "23",
      ItemMonth: "November",
      ItemYear: "2003"
    },
    // Fourth item object
    {
      ItemName: "Tide",
      ItemDay: "10",
      ItemMonth: "June",
      ItemYear: "1998"
    }
  ];

    // Rendering the App component
  return (
    <Card>{/* Using Card component to wrap content */}
    <div className="App"> {/* Main div for App content */}
      
        {/* Rendering items using Item and ItemDate components */}
      <Item name={response[0].ItemName}>Mera naam Nirma </Item>
      <ItemDate day={response[0].ItemDay}
       month={response[0].ItemMonth}
        year={response[0].ItemYear}></ItemDate>

      <Item name={response[1].ItemName}>Mera naam Surf-excel </Item>
      <ItemDate day={response[1].ItemDay}
       month={response[1].ItemMonth} 
       year={response[1].ItemYear}></ItemDate>

      <Item name={response[2].ItemName}>Mera naam Ariel </Item>
      <ItemDate day={response[2].ItemDay}
       month={response[2].ItemMonth} 
       year={response[2].ItemYear}></ItemDate>

      <Item name={response[3].ItemName}>Mera naam Tde hai</Item>
      <ItemDate day={response[3].ItemDay} 
      month={response[3].ItemMonth} 
      year={response[3].ItemYear}></ItemDate>

     <p>Hello lets learn props</p>{/* Additional text */}

      <Form></Form> {/* Rendering the Form component */}
     
    </div>
    </Card>
  );
}

export default App;
