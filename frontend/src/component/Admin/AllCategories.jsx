import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteCategory,
} from "../../actions/CategoryActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { DELETE_CATEGORY_RESET } from "../../constans/CategoryConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllCategories = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteCategory
  );

  const { error, categories } = useSelector(
    (state) => state.categories
  );
  const deleteCategoryHandler = (categoryId) => {
    dispatch(deleteCategory(categoryId));
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
      toast.success("Danh mục đã Xóa thành công");
      history.push("/admin/categories");
      dispatch({ type: DELETE_CATEGORY_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },
    {
      field: "name",
      headerName: "Tên danh mục",
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
            <Link to={`/edit/category/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() =>
                deleteCategoryHandler(params.getValue(params.id, "id"))
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

  categories &&
    categories.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ DANH MỤC - Admin`} />
      <Link class="newLink" to="/admin/category">+</Link>
      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <h1 id="listHeading">TẤT CẢ DANH MỤC</h1>
          {categories && categories.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy danh mục</h1>
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

export default AllCategories;