interface TableData {
  num: number;
  item: string;
  amount: number;
  quantity: number;
  marketRate: number;
}

const Table: React.FC = () => {
  const data: TableData[] = [
    { num: 1, item: "Item 1", amount: 100, quantity: 5, marketRate: 20 },
    { num: 2, item: "Item 2", amount: 150, quantity: 3, marketRate: 30 },
    { num: 3, item: "Item 3", amount: 120, quantity: 2, marketRate: 70 },
    { num: 4, item: "Item 4", amount: 110, quantity: 7, marketRate: 50 },
  ];

  return (
    <table className="table container my-4 border border-secondary">
      <thead>
        <tr>
          <th className="bg-dark text-white text-center" scope="col">
            S.No
          </th>
          <th className="bg-dark text-white text-center" scope="col">
            Item Name
          </th>
          <th className="bg-dark text-white text-center" scope="col">
            Quantity
          </th>
          <th className="bg-dark text-white text-center" scope="col">
            Market Rate
          </th>
          <th className="bg-dark text-white text-center" scope="col">
            Cost of Production
          </th>
          <th className="bg-dark text-white text-center" scope="col">
            Amount Earnable
          </th>
          <th className="bg-dark text-white" scope="col">
            Profit
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.num}>
            <th className="px-2 text-center" scope="row">
              {item.num}
            </th>
            <td className="text-center">{item.item}</td>
            <td className="text-center">{item.quantity}</td>
            <td className="text-center">{item.marketRate}</td>
            <td className="text-danger text-center">&#8377; {item.amount}</td>
            <td className="text-success text-center">
              &#8377; {item.marketRate * item.quantity}
            </td>
            <td
              className={
                item.marketRate * item.quantity - item.amount > 0
                  ? "text-success"
                  : item.marketRate * item.quantity - item.amount < 0
                  ? "text-danger"
                  : "text-secondary "
              }
            >
              &#8377; {item.marketRate * item.quantity - item.amount}
            </td>
          </tr>
        ))}
        <tr>
          <th className="text-center" scope="row">
            Total Profit :
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-success"> &#8377;1000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
