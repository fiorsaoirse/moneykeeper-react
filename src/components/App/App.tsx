import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import * as purchaseActions from '../../store/actions/purchase';
import * as categoryActions from '../../store/actions/category';
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
  readPurchases: purchaseActions.readPurchases,
  readCategories: categoryActions.readCategories,
};

class App extends Component<IAppProps> {
  public componentDidMount(): void {
    this.init();
  }

  // Initializing store - read app and domain data for entities
  public init = async (): Promise<void> => {
    const { readPurchases, readCategories } = this.props;
    await readPurchases();
    await readCategories();
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