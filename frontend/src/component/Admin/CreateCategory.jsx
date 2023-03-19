import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCategory, getCategory } from "../../actions/CategoryActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_CATEGORY_RESET } from "../../constans/CategoryConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateCategory = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createCategory);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Danh mục đã được thêm thành công");
      history.push("/admin/categories");
      dispatch({ type: NEW_CATEGORY_RESET })
      dispatch(getCategory())
    }
  }, [dispatch, error, history, success]);

  const createCategorySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createCategory(myForm));
  };


  return (
    <>
      <MetaData title="THÊM DANH MỤC" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createCategorySubmitHandler}
          >
            <h1>THÊM DANH MỤC</h1>

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
              Thêm
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

export default CreateCategory;