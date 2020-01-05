import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/purchase';

const mapStateToProps = (state) => {
    const { byId, allIds } = state.categories;
    const categories = allIds.map(id => byId[id]);

    const props = {
        categories,
        labels: {
            name: 'Название',
            cost: 'Стоимость',
            category: 'Категория',
        }
    };
    return props;
};

const actionCreators = {
    addPurchase: actions.addPurchase,
};

class PurchaseForm extends Component {
    addPurchase = async (fields) => {
        const { addPurchase, reset } = this.props;
        try {
            await addPurchase({ purchase: fields });
        } catch (ex) {
            throw new Error(ex);
        }
        reset();
    }

    render() {
        const {
            handleSubmit,
            reset,
            labels,
            categories,
            submitting, pristine, error,
            purchseCreatingState
        } = this.props;

        const disabled = purchseCreatingState === 'requested';
        return (
            <form className='form' onSubmit={handleSubmit(this.addPurchase)}>
                <div className='form-group row mx-3'>
                    <label>{labels.name}</label>
                    <Field name='name' required component='input' type='text' />
                    <label>{labels.cost}</label>
                    <Field name='cost' required component='input' type='text' />
                    <label>{labels.category}</label>
                    <Field name='category' component='select' type='text' />
                </div>
                <div className='form-group'>
                    <input type='submit' disabled={disabled || submitting || pristine} className='btn btn-primary btn-sm' value='Add' />
                    <input type='button' className='btn btn-sm' onClick={reset} value='Reset' />
                </div>
            </form>
        );
    }
}
const connectedPurchaseForm = connect(mapStateToProps, actionCreators)(PurchaseForm);

export default reduxForm({
    form: 'purchaseForm',
})(connectedPurchaseForm);
