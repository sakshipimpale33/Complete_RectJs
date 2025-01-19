import { useState } from "react";

function App() {
  const [user, setuser] = useState("sakshi");

  const abs = () => {
    setuser("komal");
  };

  return (
    <div>
      User is {user};
      <button onClick={abs}>Change now</button>
    </div>
  );
}

export default App;
