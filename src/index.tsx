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
import ForgotPasswordEntity from './domain/forgotpassword/ForgotPasswordEntity';
import ForgotPasswordUsecase from './domain/forgotpassword/ForgotPasswordUsecase';
import ForgotPasswordRepositoryImpl from './infrastructure/ForgotPasswordRepositoryImpl';
import SignUpUsecase from './domain/signup/SignUpUsecase';
import SignupRepositoryImpl from './infrastructure/SignupRepositoryImpl';
import SignUpEntity from './domain/signup/SignUpEntity';
import Lang from './locale/Lang';
import locale from './locale/Locale';

const container = new Container();
container.bind(Lang).toDynamicValue(context => locale);

container.bind(LoginEntity).toDynamicValue(context => new LoginEntity("",""));
container.bind(LoginUsecase).toConstantValue(new LoginUsecase(new LoginRepositoryImpl()));

container.bind(ForgotPasswordEntity).toDynamicValue(context => new ForgotPasswordEntity(""));
container.bind(ForgotPasswordUsecase).toConstantValue(new ForgotPasswordUsecase(new ForgotPasswordRepositoryImpl()));

container.bind(SignUpEntity).toDynamicValue(context => new SignUpEntity("", ""));
container.bind(SignUpUsecase).toConstantValue(new SignUpUsecase(new SignupRepositoryImpl()));


const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <ContainerProvider container={container}>
        <App />
      </ContainerProvider>
  </Provider>,        
  document.querySelector('#root')
);