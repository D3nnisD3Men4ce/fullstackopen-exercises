import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(<App />)


// The promise is pending: It means that the final value (one of the following two) is not available yet.

// The promise is fulfilled: It means that the operation has been completed and the final value is available, 
// which generally is a successful operation. This state is sometimes also called resolved.

// The promise is rejected: It means that an error prevented the final value from being determined, 
// which generally represents a failed operation.

