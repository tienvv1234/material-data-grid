import logo from "./logo.svg";
import "./App.css";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import AlertDialog from "./AlertDialog";
import { useState } from "react";
import DialogConfirm from "./DialogConfirm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItemId, setSelectItemId] = useState("");

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => {
        return `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`;
      },
    },
    {
      headerName: "edit",
      width: 160,
      field: "btnEdit",
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Edit
          </Button>
        </strong>
      ),
    },
    {
      headerName: "delete",
      width: 160,
      field: "btnDelete",
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => alertDialog(params)}
          >
            Remove
          </Button>
        </strong>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const handleRemove = () => {
    console.log("handleRemove params", selectItemId);
  };

  const alertDialog = (params) => {
    setIsOpen(true);
    setSelectItemId(params.getValue("id"));
  };

  return (
    <div className="App">
      <div style={{ height: 400, width: "100%" }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Add New
        </Button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableColumnSelector="true"
          disableSelectionOnClick="true"
        />
      </div>

      <AlertDialog isOpen={isOpen} handleRemoveItem={handleRemove} />
      {/* <DialogConfirm /> */}
    </div>
  );
}

export default App;
