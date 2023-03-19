import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createDepartment, getDepartment } from "../../actions/DepartmentActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_DEPARTMENT_RESET } from "../../constans/DepartmentConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateDepartment = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createDepartment);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Khoa đã được thêm thành công");
      history.push("/admin/departments");
      dispatch({ type: NEW_DEPARTMENT_RESET })
      dispatch(getDepartment())
    }
  }, [dispatch, error, history, success]);

  const createDepartmentSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createDepartment(myForm));
  };


  return (
    <>
      <MetaData title="THÊM KHOA" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createDepartmentSubmitHandler}
          >
            <h1>THÊM KHOA</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên khoa"
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

export default CreateDepartment;