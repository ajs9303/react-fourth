import { data } from "./dagym";
import Card from "./molecules/Card";

function App() {
  const stores = Object.values(data.result.centerList);

  return (
    <>
      <Card {...stores[0]} />
    </>
  );
}

export default App;
