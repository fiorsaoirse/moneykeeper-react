import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/purchase';
import PurchaseItem from './PurchaseItem';

const mapStateToProps = (state) => {
    const { purchases: { byId, allIds } } = state.purchases;
    const purchases = allIds.map(id => byId[id]);
    const props = {
        purchases,
        labels: {
            purchases: 'Покупки',
            name: 'Название',
            cost: 'Стоимость',
            created: 'Дата',
            category: 'Категория',
        }
    };
    return props;
};

const actionCreators = {
    readPurchase: actions.fetchPurchase,
    readPurchases: actions.fetchPurchases,
};

class Purchases extends Component {
    componentDidMount() {
        this.refresh();
    }

    refresh = async () => {
        const { readPurchases } = this.props;
        try {
            await readPurchases();
        } catch (ex) {
            throw new Error(ex);
        }
    }

    openCreateForm = () => {
        const { history } = this.props;
        history.push('/purchases/create');
    }

    render() {
        const { purchases, labels } = this.props;

        const items = purchases.length > 0
            && purchases
                .map(({ id, name, cost, created, category }) =>
                <PurchaseItem key={id} id={id} name={name} created={created} category={category} cost={cost} />);

        return (
            <div>
                <button type='button' className='btn btn-primary mb-10' onClick={this.openCreateForm}>
                    Add
                </button>
                <div className='table-responsive-lg'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>{labels.name}</th>
                                <th scope='col'>{labels.cost}</th>
                                <th scope='col'>{labels.created}</th>
                                <th scope='col'>{labels.category}</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(Purchases);
