// const parent = document.getElementById("parent");

// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// li1.innerText = "Item 1";

// const li2 = document.createElement("li");
// li2.innerText = "Item 2";

// const li3 = document.createElement("li");
// li3.innerText = "Item 3";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// parent.appendChild(ul);

// ---------------------------------------------------------------

// console.log(React);
// console.log(ReactDOM);

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const li1 = React.createElement(
//     "li",
//     {
//         style: {
//             color: "blue",
//         },
//     },
//     "Item 1"
// ); // --> type, options, children
// const li2 = React.createElement(
//     "li",
//     {
//         className: "text-big",
//     },
//     "Item 2"
// ); // --> type, options, children
// const li3 = React.createElement("li", {}, "Item 3"); // --> type, options, children

// const ul = React.createElement("ul", {}, [li1, li2, li3]);

// reactRoot.render(ul);

// ------------------------------------------------------------

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);

// // const title = React.createElement("h1", {}, "Hello from React DOM!");

// // console.log("type of title:", typeof title);
// // console.log("title:", title);

// // Creating my react element

// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         style: { color: "brown" },
//         children: "Hello from React DOM!",
//     },
//     _owner: null,
//     _store: {},
// };

// reactRoot.render(title2);

// --------------------------------------------------------------------

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// const title2 = <h1>Hello from JSX</h1>; // React Element
// reactRoot.render(title2);

const Title3 = () => {
    return <h1>Hello from JSX Again 4!</h1>;
}; // React Component

// reactRoot.render(Title3());
reactRoot.render(<Title3 />);
