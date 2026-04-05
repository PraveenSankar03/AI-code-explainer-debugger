import "./style.css";
import { useState } from "react";

const Home = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("explain");

  const handleSubmit = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:8000/api/explain/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, mode }),
    });

    const data = await response.json();
    setExplanation(data.explanation);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1 className="title">AI powered coding assistant.</h1>

      <div className="toggle-group">
        <button
          className={`toggle-btn ${mode === "explain" ? "active" : ""}`}
          onClick={() => {
            setMode("explain");
            setExplanation("");
          }}
        >
          Explain
        </button>
        <button
          className={`toggle-btn ${mode === "debug" ? "active" : ""}`}
          onClick={() => {
            setMode("debug");
            setExplanation("");
          }}
        >
          Debug
        </button>
      </div>

      <div className="workspace">
        <div className="panel">
          <h2>Code</h2>
          <textarea
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading
              ? "Analyzing..."
              : mode === "explain"
                ? "Explain Code"
                : "Debug Code"}
          </button>
        </div>

        <div className="panel">
          <h2>{mode === "explain" ? "Explanation" : "Debug Report"}</h2>
          <div className="output">
            {loading
              ? "Analyzing..."
              : explanation ||
                `${mode === "explain" ? "Explanation" : "Debug report"} will appear here.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
