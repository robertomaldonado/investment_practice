import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <Form />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table />
    </div>
  );
}

export default App;
