import { useState } from 'react';

const Home = () => {
  const [courtCase, setCourtCase] = useState('');
  const [decision, setDecision] = useState('');

  function generateDecision(courtCase) {
    fetch(`./api/decision/?court_case=${courtCase}`)
      .then((response) => response.json())
      .then((data) => setDecision(data.decision));
  }

  return (
    <div>
      <h1>Supreme Court Decision Generator</h1>
      <div>
        <p>
          Generate a supreme court decision about...
          <input
            type="text"
            name="courtCase"
            value={courtCase}
            onChange={(e) => {
              setCourtCase(e.target.value);
            }}
          ></input>
        </p>
        <button onClick={() => generateDecision(courtCase)}>Submit</button>
      </div>
      <p>{decision}</p>
    </div>
  );
};

export default Home;
