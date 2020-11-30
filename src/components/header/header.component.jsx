import './header.css'

export function Header (props) {
    return (
        <div className="card-header">
            <h1 className="card-header-title header"> You have ({props.numberTodos}) Tasks </h1>
        </div>
    );
};

