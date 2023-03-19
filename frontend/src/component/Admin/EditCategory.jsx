import React, { useEffect, useState } from "react";
import "./newAndEdit.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateCategory, getCategoryDetails, getCategory } from "../../actions/CategoryActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import { UPDATE_CATEGORY_RESET } from "../../constans/CategoryConstans";
import { ToastContainer, toast } from 'react-toastify';
import SideBar from "./Sidebar";
const UpdateCategory = ({ history, match }) => {

  const dispatch = useDispatch();

  const { error, category } = useSelector((state) => state.categoryDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteCategory);

  const [name, setName] = useState("");


  const categoryId = match.params.id;

  useEffect(() => {
    if (category && category._id !== categoryId) {
      dispatch(getCategoryDetails(categoryId));
    } else {
      setName(category.name);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Danh mục đã được sửa thành công");
      history.push("/admin/categories");
      dispatch({ type: UPDATE_CATEGORY_RESET });
      dispatch(getCategory())
    }
  }, [dispatch, error, history, isUpdated, categoryId, category, updateError]);

  const updateCategorySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(updateCategory(categoryId, myForm));
  };


  return (
    <>
      <MetaData title="Sửa danh mục" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            encType="multipart/form-data"
            onSubmit={updateCategorySubmitHandler}
          >
            <h1>Sửa danh mục</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên danh mục"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <Button
              id="createBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Cập nhật
            </Button>
          </form>
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

export default UpdateCategory;