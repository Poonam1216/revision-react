const parent = React.createElement(
    "div", 
{id: "parent" }, 
[React.createElement("div", {id:"child"},
[React.createElement("h1", {id:"heading"}, "I am a h1 tag"),
React.createElement("h1", {id:"heading2"}, "I am a2nd h1 tag")
])],
[React.createElement("div", {id:"child"},
[React.createElement("h1", {id:"heading"}, "I am a h1 tag"),
React.createElement("h1", {id:"heading2"}, "I am a2nd h1 tag")
])]
);

// const heading = React.createElement("h1", {id:"heading"}, "hello world");
console.log(parent)
// console.log(heading) //it return the object //props => children
// console.log(heading.props) //it return the object //props => children
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //in this render we are passing react element 

// this render convert the heading object into heading tag and put it up on the DOM
