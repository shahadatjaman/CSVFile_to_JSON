import { useState } from "react";
import Papa from "papaparse";
import "./App.css";
import { getTargetedJSON } from "./utils";

function App() {
  const [csvData, setCsvData] = useState("");
  const [jsonData, setJsonData] = useState("");

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const csvString = reader.result;
      setCsvData(csvString);
      const jsonArray = Papa.parse(csvString, { header: true }).data;
      const formatedJSON = getTargetedJSON(jsonArray);

      setJsonData(formatedJSON);
    };
    reader.readAsText(file);
  };
  const handleFileUpload = (e) => {
    e.preventDefault();
    console.log(jsonData);
  };

  return (
    <div className="App">
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleChangeFile} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
