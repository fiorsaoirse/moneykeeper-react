import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/purchase';
import PurchaseItem from './PurchaseItem';
import { IState } from '../../interfaces/IState';
import { IPurchaseProps } from '../../interfaces/IPurchaseProps';
import { Purchase } from '../../classes/Purchase';

const mapStateToProps = (state: IState) => {
    const { purchases: { byId, allIds } } = state.purchases;
    const purchases = allIds.map((id: string) => byId[id]);
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
    fetchPurchase: actions.fetchPurchase,
    fetchPurchases: actions.fetchPurchases,
};

class Purchases extends Component<IPurchaseProps> {
    public componentDidMount() {
        // this.refresh();
    }

    // public refresh = async () => {
    //     const { fetchPurchases } = this.props;
    //     try {
    //         await fetchPurchases();
    //     } catch (ex) {
    //         throw new Error(ex);
    //     }
    // }

    public openCreateForm = () => {
        const { history } = this.props;
        if (!history) {
            window.location.href = '/purchases/create';
            return;
        }
        history.push('/purchases/create');
    }

    public render() {
        const { purchases, labels } = this.props;

        const items = purchases && purchases.length > 0
            && purchases
                .map((purchase: Purchase) =>
                    <PurchaseItem purchase={purchase} />);

        const labelsItems = labels && <React.Fragment>
            <th scope='col'>{labels.name}</th>
            <th scope='col'>{labels.cost}</th>
            <th scope='col'>{labels.created}</th>
            <th scope='col'>{labels.category}</th>
            <th scope='col'></th>
        </React.Fragment>;

        return (
            <div>
                <button type='button' className='btn btn-primary mb-10' onClick={this.openCreateForm}>
                    Add
                </button>
                <div className='table-responsive-lg'>
                    <table className='table'>
                        <thead>
                            <tr>
                                {labelsItems}
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
