import HelloWorld from './HelloWorld';

const Third = (props) => {

    return (
        <div>
            <h1>{props.message} World from {props.name}</h1>
            <h3>Trying to post two things -- {props.author}</h3>
            <HelloWorld firstName = "Bill"></HelloWorld>
        </div>
    );
}
export default Third;