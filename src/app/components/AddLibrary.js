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
                        <p>Add</p>
                    </div>
                    <div className="addlibrary__content">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="title">
                                Title
                            </label>
                            <input type="text" name={'title'} onChange={this.handleChange}/>
                            <input type="text" name={'description'} onChange={this.handleChange}/>
                            <input type="submit" value={'submit'}/>
                        </form>
                    </div>
                </div>
            </div>
    );
    }
}

let newLib = {
    id: Math.floor((Math.random() * 10000) + 1).toString(),
    title: '',
    description: ''
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

export default connect(mapStateToProps, actions)(AddLibrary);
