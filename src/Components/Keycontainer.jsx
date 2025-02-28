import React, { useState } from "react";

const Keycontainer = () => {
  const [input, setInput] = useState("");

  const keys = [
    { display: "9", pressed: "9" },
    { display: "8", pressed: "8" },
    { display: "7", pressed: "7" },
    { display: "+", pressed: "+" },
    { display: "6", pressed: "6" },
    { display: "5", pressed: "5" },
    { display: "4", pressed: "4" },
    { display: "-", pressed: "-" },
    { display: "3", pressed: "3" },
    { display: "2", pressed: "2" },
    { display: "1", pressed: "1" },
    { display: "*", pressed: "*" },
    { display: "C", pressed: "C" },
    { display: "0", pressed: "0" },
    { display: ".", pressed: "." },
    { display: "/", pressed: "/" },
    { display: "=", pressed: "=" },
  ];

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="row h100 color1 justify-content-center align-items-center">
      <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-7 color2 rounded p-1">
        <div className="col-12 text-center h80 color3 p-3">
          <div className="w100">
            <input
              type="text"
              className="w100 text-center rounded py-2"
              value={input}
              readOnly
              placeholder="0"
              style={{ fontSize: "xx-large", fontWeight: "bolder" }}
            />
          </div>
          <div className="row p-2 justify-content-center">
            {keys.map((k) => (
              <div
                key={k.display}
                className="col-3 text-white buttoncontainerstyling rounded">
                <button
                  id={k.pressed}
                  className="buttonstyling rounded sizes1 w100 mt-2"
                  onClick={() => handleClick(k.pressed)}>
                  {k.display}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keycontainer;
