import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createSchoolYear, getSchoolYear } from "../../actions/SchoolYearActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_SCHOOLYEAR_RESET } from "../../constans/SchoolYearConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateSchoolYear = ({ history }) => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);

  const { loading, error, success } = useSelector((state) => state.createSchoolYear);
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Niên khóa đã được thêm thành công");
      history.push("/admin/schoolyears");
      dispatch({ type: NEW_SCHOOLYEAR_RESET })
      dispatch(getSchoolYear())
    }
  }, [dispatch, error, history, success]);

  const createSchoolYearSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("department", department);
    dispatch(createSchoolYear(myForm));
  };


  return (
    <>
      <MetaData title="THÊM NIÊN KHÓA" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createSchoolYearSubmitHandler}
          >
            <h1>THÊM NIÊN KHÓA</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên niên khóa"
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

export default CreateSchoolYear;