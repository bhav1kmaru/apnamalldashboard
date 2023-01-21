import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import AddProducts from "../AddProducts/AddProducts";
import { useState } from "react";

function createData(name, productId, price, status) {
  return { name, productId, price, status };
}

;


const makeStyle = (status) => {
  if (status === "Listed") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Unlisted" || status==='delete') {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function Products() {
    const [rows, setRows] = useState([
      createData("T-Shirt", 552, "499", "Listed"),
      createData("Shirt", 345, "999", "Unlisted"),
      createData("Shoes", 767, "1299", "Listed"),
      createData("Hoodie", 888, "999", "Listed"),
    ]);
    const onAdd = (name, price) => {
      let item = createData(name, Date.now(), price, "Listed");
      setRows([...rows,item]);
    };
    const onDelete=(productId)=>{
        let newArr=rows.filter((el)=>{
            if(el.productId!=productId){
                return el
            }
        })
        setRows(newArr)
    }
    const onToggle=(productId)=>{
        let newArr=rows.filter((el)=>{
            if(el.productId===productId){
                if(el.status==="Listed"){
                    el.status="Unlisted"
                }else{
                    el.status="Listed"
                }
            }
            return el
        })
        setRows(newArr)
    }
  return (
    <div className="Table">
      <h3>All Products</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Product ID</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.productId}</TableCell>
                <TableCell align="left">₹{row.price}</TableCell>
                <TableCell
                  style={{ cursor: "pointer" }}
                  align="left"
                  onClick={() => onToggle(row.productId)}
                >
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell
                  style={{ cursor: "pointer" }}
                  onClick={() => onDelete(row.productId)}
                  align="left"
                  className="Details"
                >
                  <span style={makeStyle("delete")}>Delete</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProducts onAdd={onAdd} />
    </div>
  );
}
