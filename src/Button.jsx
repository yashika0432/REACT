function printhello() {
  console.log("Hello");
}
function printbye() {
  console.log("bye");
}
export default function Button() {
  return (
    <div>
      <button onClick={printhello}>Click me!</button>

      <p onClick={printbye}>This para prints bye</p>
    </div>
  );
}
