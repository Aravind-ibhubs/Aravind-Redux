import D from "./D";
import E from './E';
import "./style.css";

const B = function({info}) {
    return (
        <div>
            <h1>This is B component - {info}</h1>
            <hr />
            <div className='componentBlock'>
                <D info={info} />
                <E info={info} />
            </div>
        </div>
    )
}

export default B;
