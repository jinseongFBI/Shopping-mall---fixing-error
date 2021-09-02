// components/Orders.jsx
import useOrders from '../hooks/useOrders'
export default function Orders() {
  const orders=useOrders();
  console.log(orders);
  return (
    <aside>
      <div className="empty">
        <div className="title">You don't have any orders</div>
        <div className="subtitle">Click on a + to add an order</div>
      </div>
    </aside>
  );
}
