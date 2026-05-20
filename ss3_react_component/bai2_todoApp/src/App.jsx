import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    const { item, list } = this.state;
    if (item.trim() !== "") {
      this.setState({
        list: [...list, item],
        item: "",
      });
    }
  };

  render() {
    return (
      <div
        style={{
          width: "400px",
          margin: "50px auto",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          fontFamily: "Arial",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Todo List
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="Enter a task..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            onClick={this.handleAddItem}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.list.map((todo, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
