import logo from './logo.svg';
import './App.css';
import Sale from "./components/sale";
import SaleFilter from './components/saleFilter';
import { getSale } from "./apis/apis";
import { useEffect, useState } from 'react';
function App() {
  const [sales, setSales] = useState([]);

  const getAllSale = async () => {
    const res = await getSale();
    setSales(res);
  }

  useEffect(() => {
    getAllSale();
  }, []);

  return (
    <div className='sale_table'>
      <Sale data={sales} />
      
      <SaleFilter data={sales} />
    </div>
  );
}

export default App;
