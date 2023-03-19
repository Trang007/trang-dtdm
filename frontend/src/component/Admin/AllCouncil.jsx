import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteCouncil,
} from "../../actions/CouncilActions";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_COUNCIL_RESET } from "../../constans/CouncilConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllCouncils = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteCouncil
  );

  const { error, councils } = useSelector(
    (state) => state.councils
  );
  const deleteCouncilHandler = (councilId) => {
    dispatch(deleteCouncil(councilId));
  };


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Hội đồng đã Xóa thành công");
      history.push("/admin/councils");
      dispatch({ type: DELETE_COUNCIL_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },
    {
      field: "name",
      headerName: "Tên hội đồng",
      minWidth: 200,
      flex: 0.6,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Trạng thái",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="icon">
            <Link to={`/edit/council/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteCouncilHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = [];

  councils &&
    councils.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ HỘI ĐỒNG - Admin`} />

      <Link class="newLink" to="/admin/council">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ HỘI ĐỒNG</h1>
          {councils && councils.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy hội đồng</h1>
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default AllCouncils;