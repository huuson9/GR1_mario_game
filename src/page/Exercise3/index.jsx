import React, { useState } from "react";
function Bai3() {
  const [possible, setPossible] = useState([]);
  const [marioData, setMarioData] = useState([
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, -1, -1, -1],
    [0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
  ]);

  const onMove = (keys) => {
    const performMove = async (index) => {
      let endData;
      let down = 0;
      let right = 0;
      if (index < keys.length) {
        const key = keys[index];
        setMarioData((prevData) => {
          let newData = [...prevData];

          newData = newData.map((row, i) => {
            return row.map((cell, j) => {
              if (
                newData[i][j] === 1 &&
                i > 0 &&
                newData[i - 1][j] !== -1 &&
                key === "Move Up"
              ) {
                newData[i - 1][j] = 1;
                newData[i][j] = 0;
              }

              if (
                newData[i][j] === 1 &&
                i < 7 &&
                newData[i + 1][j] !== -1 &&
                key === "Move Down" &&
                down === 0
              ) {
                newData[i][j] = 0;
                newData[i + 1][j] = 1;
                down++;
              }

              if (
                newData[i][j] === 1 &&
                j > 0 &&
                newData[i][j - 1] !== -1 &&
                key === "Move Left"
              ) {
                newData[i][j] = 0;
                newData[i][j - 1] = 1;
              }

              if (
                newData[i][j] === 1 &&
                j < 5 &&
                newData[i][j + 1] !== -1 &&
                key === "Move Right" &&
                right === 0
              ) {
                newData[i][j] = 0;
                newData[i][j + 1] = 1;
                right++;
              }

              return cell;
            });
          });
          endData = newData;
          return newData;
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
        await performMove(index + 1);
        const isWin = endData.some((row) => row.includes(2));
        alert(
          !isWin
            ? "Thành công! Mario đã đến đích đến."
            : "Thất bại! Mario chưa đến đích đến."
        );
      }
    };
    performMove(0);
  };

  return (
    <div className="flex items-center gap-10 mt-20 ml-40">
      <div className="border-4 border-spacing-2">
        <table>
          <tbody>
            {marioData.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td
                    key={`${index}${i}`}
                    className={`${
                      cell === -1
                        ? "bg-sky-600 w-16 h-16 border"
                        : "bg-white border w-16 h-16"
                    }`}
                  >
                    {cell === 2 && <img src="/diamond.png" alt="win" />}
                    {cell === 1 && (
                      <img src="/mario.jpg" alt="mario" width={40} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col justify-between ml-8 border ju w-52 h-80">
          <div className="overflow-y-auto max-h-100">
            {possible.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <button
            className="px-6 py-2 mt-6 rounded-lg bg-lime-600 text-gray-50"
            onClick={() => onMove(possible)}
          >
            Run
          </button>
        </div>
        <div className="flex flex-col gap-3 ml-8 mt-9">
          <button
            className="w-40 py-2 rounded-lg bg-sky-700 text-gray-50"
            onClick={() => {
              setPossible([...possible, "Move Up"]);
            }}
          >
            Move Up
          </button>
          <button
            className="w-40 py-2 rounded-lg bg-sky-700 text-gray-50"
            onClick={() => {
              setPossible([...possible, "Move Down"]);
            }}
          >
            Move Down
          </button>
          <button
            className="w-40 py-2 rounded-lg bg-sky-700 text-gray-50"
            onClick={() => {
              setPossible([...possible, "Move Left"]);
            }}
          >
            Move Left
          </button>
          <button
            className="w-40 py-2 rounded-lg bg-sky-700 text-gray-50"
            onClick={() => {
              setPossible([...possible, "Move Right"]);
            }}
          >
            Move Right
          </button>
          <button
            className="w-40 py-2 bg-red-700 rounded-lg text-gray-50"
            onClick={() => {
              setPossible(possible.slice(0, -1));
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bai3;
