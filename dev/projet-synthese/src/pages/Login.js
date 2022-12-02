import '../css/index.css'
import '../css/home.css'
import FormConnexion from './components/form/FormConnexion'
import * as myConstants from './constants.js'

function Login() {
    if (myConstants.IS_LOGGED_IN)
    {
        window.location = "/"
        return
    }
  return (
    <div className="login">
        <section>
        <h1>Bien<br/>venue</h1>
        <FormConnexion/>
        </section>
    </div>
  );
}

export default Login;
