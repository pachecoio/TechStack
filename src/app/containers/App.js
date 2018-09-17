import React, {Component} from 'react';
import {Header} from "../components/Header";
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../../reducers';
import LibraryList from "../components/LibraryList";

export class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <div className="main-content">
                    <Header headerText={ 'Tech Stack' }/>
                    <main className="main">
                        <div className="card">
                            <LibraryList />
                        </div>
                    </main>
                </div>
            </Provider>
        );
    }
}
