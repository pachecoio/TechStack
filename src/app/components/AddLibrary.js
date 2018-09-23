import React, {Component} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class AddLibrary extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {

        event.preventDefault();

        newLib.id = Math.floor((Math.random() * 10000) + 1);

        this.props.addLibrary(newLib);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'title':
                newLib.title = event.target.value;
                break;
            case 'description':
                newLib.description = event.target.value;
                break;
            default:
                return null;
        }
    }

    render() {

        return (
            <div className={'card'}>
                <div className="addlibrary">
                    <div className="addlibrary__header">
                        <p>Add new Tech</p>
                    </div>
                    <div className="addlibrary__content">
                        <form className={'form'} onSubmit={this.handleSubmit}>
                            <div className="form__group">
                                <label className={'form__label'} htmlFor="title">
                                    Title
                                </label>
                                <input className={'form__input'} placeholder={'Title'} type="text" name={'title'} onChange={this.handleChange}/>
                            </div>
                            <div className="form__group">
                                <label className={'form__label'} htmlFor="description">
                                    Description
                                </label>
                                <textarea className={'form__input'} placeholder={'Description'} type="text" name={'description'} onChange={this.handleChange}/>
                            </div>
                            <input type="submit" className={'form__button btn__form'} value={'save'}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

let newLib = {
    id: null,
    title: '',
    description: ''
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

export default connect(mapStateToProps, actions)(AddLibrary);
