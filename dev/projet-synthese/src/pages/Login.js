import '../css/index.css'
import '../css/home.css'
import FormConnexion from './components/form/FormConnexion'

function Login() {
    if (window.sessionStorage.getItem("session_id") != null)
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
