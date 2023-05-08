import "./App.css";

function App() {
  return (
    <div className="w-full h-full max-w-4xl mx-auto">
      <div className="flex justify-center mt-5 ">
        <img
          className="w-1/3"
          src="https://uploads-ssl.webflow.com/6321fcd91868c8343c7229ff/63ce29ae8a1d4b85d42ea526_Full%20logo%20-%20black.png"
        />
      </div>
      <div className="px-5 mt-10">
        <div className="justify-center h-full p-5 bg-white rounded-lg shadow-xl">
          <h1 className="p-1 py-2 text-lg font-semibold text-center text-blue-800 bg-blue-100 rounded-lg">
            Technical Interview (build component below!)
          </h1>
          <div className="p-1 px-4 py-2 mt-3 text-xs font-semibold text-left text-yellow-800 bg-yellow-100 rounded-lg">
            Installed packages include:
            <div>
              <ul className="pl-2 font-normal list-disc list-inside">
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Axios</li>
                <li>React Router</li>
              </ul>
            </div>
          </div>
          <div className="px-5 border border-dashed border-gray-300 mt-3 h-[600px] rounded-lg bg-gray ">
            {/* add all relevant html elements here! */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
