import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil 2nd gen" idx={1} />
      <Product title="Zebronics zeb-transformer" idx={2} />
      <Product title="Petronics toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
