import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <div className="text-6xl text-red-500 underline">Hello Tailwind CSS</div>
  );
}

export default App;
