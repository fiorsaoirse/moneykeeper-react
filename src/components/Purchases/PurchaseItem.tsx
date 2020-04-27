import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/purchase';
import { IPurchaseProps } from '../../interfaces/IPurchaseProps';
import { IState } from '../../interfaces/IState';

const mapStateToProps = (_state: IState) => {
  const props = {};
  return props;
};

const actionCreators = {
  deletePurchase: actions.deletePurchase,
};

class PurchaseItem extends Component<IPurchaseProps> {
  public deletePurchase = (id: string) => async () => {
    const { deletePurchase } = this.props;
    try {
      await deletePurchase(id);
    } catch (ex) {
      throw new Error(ex);
    }
  }

  public render() {
    const { purchase } = this.props;

    if (!purchase) {
      throw new Error(`The purchase is undefined`);
    }

    const { id, name, cost, created, category } = purchase;

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
