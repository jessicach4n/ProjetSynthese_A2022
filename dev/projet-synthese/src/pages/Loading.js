import '../css/index.css'
import '../css/loading.css'

function Loading() {
    let gotData = false;

    if (gotData) {
        window.location = "/animation"
    }


  return (
    <div className='loading'>
        <div className='graphics-container'>
            <div className='loading-icon'>
                <img src="/logo-white.svg" alt="Logo du site web"/>
            </div>
            <div className='label'>Chargement en cours ...</div>
        </div>
    </div>
  );
}

export default Loading;
