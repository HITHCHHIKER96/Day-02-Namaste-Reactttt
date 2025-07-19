const head = React.createElement("h1", {
    id:"pritam",
    xyz : "raja"
}, "Hello from React!");

console.log(head) // this will return and object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head); // render is nothing but it will put that object inside the root which broswer can understand.


// This is a Nested React Code to biuld like HTML.
const parent = React.createElement("div", {id:"parent"}, // so this parent is noting but a OBJECT
    React.createElement("div", {id:"child1"},
        [React.createElement("h1", {id: "element"}, "Hello form H1"),
            React.createElement("h1", {id: "element"}, "Hello form H2")]
    ),
    React.createElement("div", {id:"child2"},
        [React.createElement("h1", {id: "element"}, "Hello form H1"),
            React.createElement("h1", {id: "element"}, "Hello form H2")]
    )
)

const parent2 = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {id:"element"}, "Hello from child1"),
            React.createElement("h2", {id:"element"}, "Hello from child2")]
    ),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {id:"element"}, "Hello from child1"),
            React.createElement("h2", {id:"element"}, "Hello from child2")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));


const heading = React.createElement("h1", {pritam:"akm"}, "Hello from my side!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2)
