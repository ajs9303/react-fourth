import Image from "./atom/Image";
import { data } from "./dagym";

import TextBox from "./molecules/TextBox";

function App() {
  const stores = Object.values(data.result.centerList);

  return (
    <div className="flex flex-row w-full gap-3 items-center">
      <Image {...stores[0]} />
      <TextBox {...stores[0]} />
    </div>
  );
}

export default App;
