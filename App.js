import React, { useState } from 'react';
import CustomerList from './CustomerList';
import './CustomerList.css'

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ZEN BYTE</h1>

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setShowForm(true)} className="submit-btn">
          Open Registration Form
        </button>
      </div>
      {showForm && <CustomerList/>}
    </div>
  );
}

export default App;





