import { useState } from "react"; 
import "./App.css";

const GroceryList = () => {
  //Defining states
  const [groceryItems, setGroceryItems] = useState([]);
  const [name, setName] = useState(''); 
  const [cost, setCost] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {  // Defining submit handler function that takes an event object as an argument
    e.preventDefault();  // Preventing the default form submission behavior
    if (name === '' || cost === '') {  // Checking if the name OR cost is empty
      setErrorMessage('Both the name of the grocery item and the cost is required.');  // Setting an error message if either name or cost is empty
      return;  // Returning early to prevent further execution
      // Return early is the way of writing functions or methods so
      // that the expected positive result is returned at the end of
      // the function and the rest of the code terminates the execution
      // (by returning or throwing an exception) when conditions are not met.
      // https://medium.com/swlh/return-early-pattern-3d18a41bba8
    }
    setGroceryItems([...groceryItems, {name, cost}]);  // Adding a new grocery item to the groceryItems array
    setName('');  // Resetting the states to an empty string
    setCost('');
    setErrorMessage('');
  }

  const handleDelete = index => {  // Defining delete handler function that takes an index as an argument
    setGroceryItems(groceryItems.filter((_, targetIndex) => targetIndex !== index));  // Updating the groceryItems state by removing the item at the specified index
    /*
    the filter tool goes through each item in the list one by one.
    It looks at the targetIndex of each item and checks if it's the same as the index we want to remove.
    If the targetIndex is different from the index, it means that the item is not the one we want to remove,
    so we keep it in the list. But if the targetIndex is the same as the index, it means that it's the item
    we want to remove, so we leave it out from the new list.
    */
  }

  const handleClear = () => {  // Defining clear function
    setGroceryItems([]);  // Clearing the groceryItems state by setting it to an empty array
  }

  const totalCost = groceryItems.reduce((total, item) => total + Number(item.cost), 0).toFixed(2);  // Calculating the total cost of all grocery items using the reduce method

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
            />
          </div>
          <div className="col">
            <input
              value={cost}
              onChange={e => setCost(e.target.value)}
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {groceryItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>
                  <button onClick={() => handleDelete(index)} aria-label="Delete" title="Delete" className="btn btn-danger">
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${totalCost}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button onClick={handleClear} type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
