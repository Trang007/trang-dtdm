import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createTrainingSystem, getTrainingSystem } from "../../actions/TrainingSystemActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_TRAININGSYSTEM_RESET } from "../../constans/TrainingSystemConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateTrainingSystem = ({ history }) => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);

  const { loading, error, success } = useSelector((state) => state.createTrainingSystem);
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Hệ đào tạo đã được thêm thành công");
      history.push("/admin/trainingsystems");
      dispatch({ type: NEW_TRAININGSYSTEM_RESET })
      dispatch(getTrainingSystem())
    }
  }, [dispatch, error, history, success]);

  const createTrainingSystemSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("department", department);
    dispatch(createTrainingSystem(myForm));
  };


  return (
    <>
      <MetaData title="THÊM HỆ ĐÀO TẠO" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createTrainingSystemSubmitHandler}
          >
            <h1>THÊM HỆ ĐÀO TẠO</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên hệ đào tạo"
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

export default CreateTrainingSystem;