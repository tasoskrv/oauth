import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';

import { DateStringService } from './date-string.service';
import { ContainerProvider } from './react-binding';
import { Container } from 'inversify';


const container = new Container();
container.bind(DateStringService).toConstantValue(new DateStringService('today is'));

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <ContainerProvider container={container}>
        <App/>
      </ContainerProvider>
  </Provider>,        
  document.querySelector('#root')
);