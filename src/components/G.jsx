import H from './H';
import './style.css';

const G = function({info}) {
    return (
        <div>
            <h1>This is G component = {info}</h1>
            <div className='onlyLeft'>
                <H />
            </div>
        </div>
    )
}

export default G;
