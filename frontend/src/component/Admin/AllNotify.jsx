import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteNotify,
} from "../../actions/NotifyActions";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";
import { DELETE_NOTIFY_RESET } from "../../constans/NotifyConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllNotifys = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteNotify
  );

  const { error, notifys } = useSelector(
    (state) => state.notifys
  );
  const deleteNotifyHandler = (notifyId) => {
    dispatch(deleteNotify(notifyId));
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
      toast.success("Thông báo đã Xóa thành công");
      history.push("/admin/notifys");
      dispatch({ type: DELETE_NOTIFY_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },
    {
      field: "name",
      headerName: "Tên thông báo",
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
            <Link to={`/edit/notify/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteNotifyHandler(params.getValue(params.id, "id"))
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

  notifys &&
    notifys.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ THÔNG BÁO - Admin`} />

      <Link class="newLink" to="/admin/notify">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ THÔNG BÁO</h1>
          {notifys && notifys.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy thông báo</h1>
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

export default AllNotifys;