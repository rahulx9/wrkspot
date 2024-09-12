import "./App.css";
import CountriesInfo from "./pages/CountriesInfo";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CountriesInfo />
      </ErrorBoundary>
    </div>
  );
}

export default App;
