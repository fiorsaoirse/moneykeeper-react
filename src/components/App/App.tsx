import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import * as purchaseActions from '../../actions/purchase';
import * as categoryActions from '../../actions/category';
import { IState } from '../../interfaces/IState';
import { IPurchaseProps } from '../../interfaces/IPurchaseProps';
import { ICategoryProps } from '../../interfaces/ICategoryProps';

interface IAppProps extends IPurchaseProps, ICategoryProps {
}

const mapStateToProps = (_state: IState) => {
  const props = {};
  return props;
};

const actionCreators = {
  fetchPurchases: purchaseActions.fetchPurchases,
  fetchCategories: categoryActions.fetchCategories,
};

class App extends Component<IAppProps> {
  public componentDidMount(): void {
    this.init();
  }

  public init = async () => {
    const { fetchPurchases, fetchCategories } = this.props;
    await fetchPurchases();
    await fetchCategories();
  }

  public render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(App);