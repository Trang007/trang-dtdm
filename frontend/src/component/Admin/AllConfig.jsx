import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteConfig,
} from "../../actions/ConfigActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { DELETE_CONFIG_RESET } from "../../constans/ConfigConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllConfigs = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteConfig
  );

  const { error, configs } = useSelector(
    (state) => state.configs
  );
  const deleteConfigHandler = (configId) => {
    dispatch(deleteConfig(configId));
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
      toast.success("Liên kết đã Xóa thành công");
      history.push("/admin/configs");
      dispatch({ type: DELETE_CONFIG_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },
    {
      field: "name",
      headerName: "Tên liên kết",
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
            <Link to={`/edit/config/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteConfigHandler(params.getValue(params.id, "id"))
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

  configs &&
    configs.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ LIÊN KẾT - Admin`} />

      <Link class="newLink" to="/admin/config">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ LIÊN KẾT</h1>
          {configs && configs.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy liên kết</h1>
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

export default AllConfigs;