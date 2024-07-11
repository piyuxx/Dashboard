import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [

  {
    field: "Name",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "Rate",
    type: "string",
    headerName: "Rate",
    width: 150,
  },
  {
    field: "Margin Percent",
    type: "string",
    headerName: "Margin Percent",
    width: 200,
  },
  {
    field: "Impressions",
    type: "string",
    headerName: "Impressions",
    width: 200,
  },
  {
    field: "type",
    type: "string",
    headerName: "type",
    width: 150,
  },
  {
    field: "Budget",
    type: "string",
    headerName: "Budget",
    width: 150,
  },
  {
    field: "Revenue",
    type: "string",
    headerName: "Revenue",
    width: 150,
  },
  {
    field: "CTR",
    type: "string",
    headerName: "CTR",
    width: 150,
  },
  {
    field: "Margin",
    type: "string",
    headerName: "Margin",
    width: 150,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">

      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
    </div>
  );
};

export default Users;
