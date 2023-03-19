import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBranch } from "../../actions/BranchActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_BRANCH_RESET } from "../../constans/BranchConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateBranch = ({ history }) => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);
  const { loading, error, success } = useSelector((state) => state.createBranch);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Đồ án đã được thêm thành công");
      history.push("/admin/branchs");
      dispatch({ type: NEW_BRANCH_RESET });
    }
  }, [dispatch, error, history, success]);

  const createBranchSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("department", department);
    dispatch(createBranch(myForm));
  };


  return (
    <>
      <MetaData title="THÊM NGÀNH" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createBranchSubmitHandler}
          >
            <h1>THÊM NGÀNH</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên ngành"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <select onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Chọn khoa</option>
                {departments.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
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

export default CreateBranch;