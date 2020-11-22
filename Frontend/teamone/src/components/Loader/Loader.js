import React from 'react';
import { Facebook } from 'react-content-loader';
const Loader = () => {
  return (
    <div>
      <h2>Pulling tweet data</h2>
      <Facebook />
    </div>
  );
};
export default Loader;