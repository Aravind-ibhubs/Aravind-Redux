import F from './F';
import Header from './Header/Header';
import "./style.css";

const C = function({info}) {
    return (
        <div>
            <h1>This is C component - {info}</h1>
            <hr />
            <div className='componentBlock'>
                <F info={info} />
                <Header info={info} />
            </div>
        </div>
    )
}

export default C;
