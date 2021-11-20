import React from 'react';
import { hot } from 'react-hot-loader/root';

const css = `
    .center {
      text-align: center;
    }

    .logo {
      width: 340px;
      height: 220px;
      margin: 0 auto;
      float: none;
      display: block;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <div>
      <style>{css}</style>
      <h2 className="center">Joselu Gallardo automatic deploy exercise</h2>
      <h4 className="center">Exercises done for LemonCode's cloud module</h4>
      <img
        className="logo"
        src="https://c.tenor.com/QHnFrd9cU6gAAAAC/brent-rambo.gif"
        alt="Gif"
      />
    </div>
  );
};

export default hot(App);
