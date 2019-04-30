import Base from './Base/Base';
import App from './App/App';
import LoginPage from './login/LoginPage';
import SignUpPage from './signup/SignUpPage';
import Auth from './Auth/Auth';


const routes = {
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: App
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/');
      }
    }
  ]
};

export default routes;
