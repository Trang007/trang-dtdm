import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProject,
  getAdminProject,
} from "../../actions/ProjectActions";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import Star from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import { DELETE_PROJECT_RESET } from "../../constans/ProjectConstans";


const AllProjects = ({ history }) => {

  const dispatch = useDispatch();

  const { error, projects } = useSelector((state) => state.projects);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProject
  );

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Đồ án đã được xóa thành công");
      history.push("/dashboard");
      dispatch({ type: DELETE_PROJECT_RESET });
    }
    dispatch(getAdminProject());
  }, [dispatch, error, history, deleteError, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },

    {
      field: "name",
      headerName: "Tên",
      minWidth: 350,
      flex: 1,
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
            <Link to={`/admin/reviews/${params.getValue(params.id, "id")}`}>
              <Star />
            </Link>
            <Link to={`/edit/project/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteProjectHandler(params.getValue(params.id, "id"))
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

  projects &&
    projects.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
        category: item.category,
      });
    });

  return (
    <>
      <MetaData title={`Danh sách đồ án- Admin`} />

      <Link class="newLink" to="/admin/project">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ CÁC DỰ ÁN</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="listTable"
            autoHeight
          />
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
  )
}

export default AllProjects
