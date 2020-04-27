import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/purchase';
import { IPurchaseProps } from '../../interfaces/IPurchaseProps';
import { IState } from '../../interfaces/IState';
import { Category } from '../../classes/Category';

interface IPurchaseForm {
    name: string;
    cost: number;
    category?: Category;
}

const mapStateToProps = (state: IState) => {
    // const { categories: { byId, allIds } } = state.categories;
    // const categories = allIds.map(id => byId[id]);

    const props = {
        // categories,
        labels: {
            name: 'Название',
            cost: 'Стоимость',
            category: 'Категория',
        }
    };
    return props;
};

const actionCreators = {
    createPurchase: actions.createPurchase,
};

class PurchaseForm extends Component<IPurchaseProps & InjectedFormProps<IPurchaseForm, IPurchaseProps>> {
    public submitForm = async (fields: any) => {
        const { createPurchase, reset } = this.props;
        try {
            await createPurchase({ purchase: fields });
        } catch (ex) {
            throw new Error(ex);
        }
        reset();
    }

    public render() {
        const {
            handleSubmit,
            reset,
            labels,
            // categories,
            submitting, pristine, error,
            // purchseCreatingState
        } = this.props;

        // const disabled = purchseCreatingState === 'requested';
        const labelItems = labels &&
            <React.Fragment>
                <label>{labels.name}</label>
                <Field name='name' required component='input' type='text' />
                <label>{labels.cost}</label>
                <Field name='cost' required component='input' type='text' />
                <label>{labels.category}</label>
                <Field name='category' component='select' type='text' />
            </React.Fragment>;

        return (
            <form className='form' onSubmit={handleSubmit(this.submitForm)}>
                <div className='form-group row mx-3'>
                    {labelItems}
                </div>
                <div className='form-group'>
                    <input type='submit' disabled={submitting || pristine} className='btn btn-primary btn-sm' value='Add' />
                    <input type='button' className='btn btn-sm' onClick={reset} value='Reset' />
                </div>
            </form>
        );
    }
}

const form = reduxForm<IPurchaseForm, IPurchaseProps>({
    form: 'purchaseForm',
})(PurchaseForm);

const connectedPurchaseForm = connect(mapStateToProps, actionCreators)(form);

export default connectedPurchaseForm;
