import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createClassroom, getClassroom } from "../../actions/ClassroomActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_CLASSROOM_RESET } from "../../constans/ClassroomConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateClassroom = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createClassroom);

  const [name, setName] = useState("");
  const [specialized, setSpecialized] = useState("");
  const { specializeds } = useSelector((state) => state.specializeds);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Lớp đã được thêm thành công");
      history.push("/admin/classrooms");
      dispatch({ type: NEW_CLASSROOM_RESET })
      dispatch(getClassroom())
    }
  }, [dispatch, error, history, success]);

  const createClassroomSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("specialized", specialized);
    dispatch(createClassroom(myForm));
  };


  return (
    <>
      <MetaData title="THÊM LỚP" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createClassroomSubmitHandler}
          >
            <h1>THÊM LỚP</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên lớp"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <select onChange={(e) => setSpecialized(e.target.value)}>
                <option value="">Chọn Chuyên Ngành</option>
                {specializeds.map((item) => (
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

export default CreateClassroom;