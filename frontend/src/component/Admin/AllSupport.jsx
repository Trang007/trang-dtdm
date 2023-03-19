import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteSupport,
} from "../../actions/SupportActions";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_SUPPORT_RESET } from "../../constans/SupportConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllSupports = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteSupport
  );

  const { error, supports } = useSelector(
    (state) => state.supports
  );
  const deleteSupportHandler = (supportId) => {
    dispatch(deleteSupport(supportId));
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
      toast.success("Hỗ trợ đã Xóa thành công");
      history.push("/admin/supports");
      dispatch({ type: DELETE_SUPPORT_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },
    {
      field: "name",
      headerName: "Tên hỗ trợ",
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
            <Link to={`/edit/support/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteSupportHandler(params.getValue(params.id, "id"))
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

  supports &&
    supports.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ HỖ TRỢ - Admin`} />

      <Link class="newLink" to="/admin/support">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ HỖ TRỢ</h1>
          {supports && supports.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy hỗ trợ</h1>
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

export default AllSupports;