import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';

import { ContainerProvider } from './di-container';
import { Container } from 'inversify';
import LoginUsecase from './domain/login/LoginUsecase';
import LoginRepositoryImpl from './infrastructure/LoginRepositoryImpl';
import LoginEntity from './domain/login/LoginEntity';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = new Container();
container.bind(LoginEntity).toDynamicValue(context => new LoginEntity("",""));
container.bind(LoginUsecase).toConstantValue(new LoginUsecase(new LoginRepositoryImpl()));

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <ContainerProvider container={container}>
        <App/>
      </ContainerProvider>
  </Provider>,        
  document.querySelector('#root')
);