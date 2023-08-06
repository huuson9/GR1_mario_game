import { useState } from "react";

function Exercise2() {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  const [col, setCol] = useState();
  const [row, setRow] = useState();
  return (
    <>
      <div className="grid w-2/5 grid-flow-col grid-rows-2 gap-4 p-8 ">
        <input
          border-2
          value={col}
          onChange={(e) => setCol(e.target.value)}
          className="p-2 border-2 rounded-lg "
          required
          type="number"
          placeholder="Nhập số hàng: "
        ></input>
        <input
          value={row}
          required
          type="text"
          onChange={(e) => setRow(e.target.value)}
          className="p-2 border-2 rounded-lg "
          placeholder="Nhập số cột: "
        ></input>
      </div>
      <div
        className="grid w-3/5 gap-10 m-auto mb-6 border-4 border-blue-700"
        style={{
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`,
        }}
      >
        {Array.from({ length: col * row }).map((_, index) => (
          <div key={index} className="gap-10 border">
            {images[index] && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={`/${images[index]}`} alt={`Image ${index}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Exercise2;
