import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  render(
    <>
      <h1>Hello!</h1>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
