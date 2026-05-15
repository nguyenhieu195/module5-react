import "./App.css";
import React from "react";

function App() {
  const ds = React.createElement("h1", null, "Danh sách thành phố");
  const city1 = React.createElement("li", null, "Hà nội");
  const city2 = React.createElement("li", null, "Hồ chí minh");
  const city3 = React.createElement("li", null, "Đà nẵng");
  const city4 = React.createElement("li", null, "Hải phòng");
  const city5 = React.createElement("li", null, "Nha trang");
  const city6 = React.createElement("li", null, "Quảng trị");

  const listCity = React.createElement("ul", null, [
    city1,
    city2,
    city3,
    city4,
    city5,
    city6,
  ]);

  const page = React.createElement("div", null, [ds, listCity]);

  return page;
}

export default App;
