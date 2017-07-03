import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        {/* ever write a comment as a first thing after return */}
        <h2>Please enter the store</h2>
        <input type="text" required placeholder="Store name"
          defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}


export default StorePicker;
