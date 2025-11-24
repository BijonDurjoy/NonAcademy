import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <p>Hello World</p>
      <ProductCard
        name={"Wireless Headphones"}
        price={4000}
        image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpusatsoundsystem.com%2Fwp-content%2Fuploads%2FSennheiser-HD-350BT.webp&f=1&nofb=1&ipt=6e35e32d20d919915a958e564cfc59e3dcdd017c4d475c1400b4762582206193"}
        inStock={true}
      />

      <ProductCard
        name={"Smart Watch"}
        price={8000}
        image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpisces.bbystatic.com%2Fimage2%2FBestBuy_US%2Fimages%2Fproducts%2F6280%2F6280408_rd.jpg&f=1&nofb=1&ipt=238e9038292eeed3534e20c7f87c25a5b9f74215b531e7483fb0b3daa83c92a5"}
        inStock={false}
      />

      <ProductCard
        name={"Digital Camera"}
        price={15000}
        image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F49d86635-3a17-4550-a3ac-937b3bd546a7_1.007c196265cf588fec8a2911a6659373.jpeg&f=1&nofb=1&ipt=66303ac654ca6357e0189d486e6fc5af4f73510fe2469eefdd92e88863d314eb"}
        inStock={true}
      />
      
    </div>
  );
}

export default App;
