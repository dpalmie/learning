import './App.css';

function SecretComponent() {
    return (
        <h1>Super secret!</h1>
    )
}

function RegularComponent() {
    return (
        <h1>Not so secret.</h1>
    )
}

// array destructuring
const [item1, , item3] = ["boots", "tent", "headlamp"];
// console.log(item1, item3); // returns boots headlamp

function AppTwo(props) {
    // could also use ternary operator to make it shorter
    if (props.authorized) {
        return <SecretComponent />
    } else {
        return <RegularComponent />
    }
}

export default AppTwo;