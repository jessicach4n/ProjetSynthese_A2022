import '../css/index.css'
import FormRegister from './components/form/FormRegister'

function Register() {
  if (window.sessionStorage.getItem("session_id") != null)
  {
      window.location = "/"
      return
  }
  return (
    <div className="register">
        <section>
            <FormRegister/>
            <h1>Inscrip<br/>tion</h1>
        </section>
    </div>
  );
}

export default Register;
