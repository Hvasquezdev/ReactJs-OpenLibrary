import React from 'react';

class TableBody extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.when}</td>
        <td>{this.props.data.who}</td>
        <td>{this.props.data.description}</td>
      </tr>
    );
  }
}

export default TableBody;