import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/clientApi";

export default function TableList({ onOpen ,searchTerm, onDelete}) {
  {
    /* make table of sample sata */
  }
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(`${BASE_URL}/clients`);
        setTableData(reponse.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {/* ++mt-10 */}
      <div className="overflow-x-auto mt-10">
        {error && <p>{error}</p>}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* ++status rate */}
              <th></th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Client Job</th>
              <th>Rate</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {/* ++ hover */}
          <tbody className="hover">
            {/* row 1 */}
            {filteredData.map((item) => (
              <tr key={item.id} className="hover">
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.job}</td>
                <td>{item.rate}</td>
                {/* ++button logic ++rounded-full w-20  */}
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      item.isactive ? "btn-primary" : "btn-outline btn-primary"
                    }`}
                  >
                    {item.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button className="btn btn-secondary " onClick={() => onOpen("edit", item)}>
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent" onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
