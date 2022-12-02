import '../css/index.css'
import FormRegister from './components/form/FormRegister'
import * as myConstants from './constants.js'

function Register() {
  if (myConstants.IS_LOGGED_IN)
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
