import React, { useState } from "react";
function Exercise1() {
  const [tableData, setTableData] = useState([]);
  const [mssv, setMssv] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const onDelete = (index) => {
    setTableData((prev) => prev.filter((item, i) => i !== index));
  };
  const onAdd = () => {
    setTableData((prev) => [...prev, { mssv, name, dob, email }]);
    setMssv("");
    setName("");
    setDob("");
    setEmail("");
  };
  return (
    <div className="container flex flex-col items-center justify-center w-3/5 mt-8 ml-5">
      <div className="p-2 border-2 border-indigo-900 border-spacing-1">
        <div className="grid grid-flow-col grid-rows-2 gap-4 p-8 ">
          <input
            border-2
            value={mssv}
            onChange={(e) => setMssv(e.target.value)}
            className="p-2 border-2 rounded-lg "
            required
            type="text"
            placeholder="MSSV"
          ></input>
          <input
            value={name}
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-2 rounded-lg "
            placeholder="Họ và tên"
          ></input>
          <input
            required
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="p-2 border-2 rounded-lg "
            placeholder="Ngày sinh"
          ></input>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-2 rounded-lg "
            placeholder="Email"
          ></input>
        </div>
        <button
          className="px-6 py-1 rounded-md bg-sky-900 text-gray-50"
          onClick={onAdd}
          type="button"
        >
          Thêm
        </button>
      </div>
      <div className="p-8 mt-10 ml-5 border-2 border-indigo-900">
        <table>
          <tbod>
            <tr className="p-8">
              <th className="px-10 py-2 border-2 ">STT</th>
              <th className="px-10 py-2 border-2 ">MSSV</th>
              <th className="px-10 py-2 border-2 ">Họ tên</th>
              <th className="px-10 py-2 border-2 ">Ngày sinh</th>
              <th className="px-10 py-2 border-2 ">Email</th>
              <th className="px-10 py-2 border-2 "> </th>
            </tr>
            {tableData.map((item, index) => (
              <tr className="p-8" key={item.mssv}>
                <td className="p-2 border-2 ">{index + 1}</td>
                <td className="p-2 border-2 ">{item.mssv}</td>
                <td className="p-2 border-2 ">{item.name}</td>
                <td className="p-2 border-2 ">{item.dob}</td>
                <td className="p-2 border-2 ">{item.email}</td>
                <td className="p-2 border-2 ">
                  <button onClick={() => onDelete(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbod>
        </table>
      </div>
    </div>
  );
}

export default Exercise1;
