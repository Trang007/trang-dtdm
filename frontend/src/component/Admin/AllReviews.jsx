import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./projectReviews.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllReviews,
  deleteReviews,
} from "../../actions/ProjectActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_REVIEW_RESET } from "../../constans/ProjectConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllReviews = ({ history, match }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteReview
  );

  const { error, reviews } = useSelector(
    (state) => state.projectReviews
  );

  // eslint-disable-next-line no-unused-vars
  const [projectId, setProjectId] = useState(match.params.id);

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReviews(reviewId, projectId));
  };


  useEffect(() => {
    if (projectId.length === 24) {
      dispatch(getAllReviews(projectId));
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Đánh giá đã Xóa thành công");
      history.push("/admin/projects");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, error, deleteError, history, isDeleted, projectId]);

  const columns = [
    { field: "index", headerName: "STT", minWidth: 150, flex: 0.3 },

    {
      field: "user",
      headerName: "Họ tên",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "comment",
      headerName: "Bình luận",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Hạng",
      type: "number",
      minWidth: 180,
      flex: 0.4,

      cellClassName: (params) => {
        return params.getValue(params.id, "rating") >= 3
          ? "greenColor"
          : "redColor";
      },
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
            <Button
              onClick={() =>
                deleteReviewHandler(params.getValue(params.id, "id"))
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

  reviews &&
    reviews.forEach((item, index) => {
      rows.push({
        id: item._id,
        index: index + 1,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ ĐÁNH GIÁ - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="listContainer">
          <form
            className="listForm"
          >
            <h1 className="listFormHeading">TẤT CẢ ĐÁNH GIÁ</h1>

          </form>

          {reviews && reviews.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="listTable"
              autoHeight
            />
          ) : (
            <h1 className="listFormHeading">Không tìm thấy đánh giá</h1>
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

export default AllReviews;