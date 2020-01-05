import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/purchase';

const mapStateToProps = state => {
  const props = {};
  return props;
};

const actionCreators = {
  deletePurchase: actions.deletePurchase,
};

class PurchaseItem extends Component {
  deletePurchase = (id) => async () => {
    console.log(id);
    const { deletePurchase } = this.props;
    console.log(deletePurchase.toString());
    try {
      await deletePurchase(id);
    } catch (ex) {
      throw new Error(ex);
    }
  }

  render() {
    const { id, name, cost, created, category } = this.props;

    return (
      <tr>
        <th scope='row'>{name}</th>
        <td>{cost}</td>
        <td>{new Date(created).toLocaleDateString()}</td>
        <td>{category}</td>
        <td>
          <button type='button' className='close' aria-label='Close' onClick={this.deletePurchase(id)}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(PurchaseItem);
