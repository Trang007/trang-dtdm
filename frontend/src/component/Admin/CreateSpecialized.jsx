import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createSpecialized } from "../../actions/SpecializedActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_SPECIALIZED_RESET } from "../../constans/SpecializedConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateSpecialized = ({ history }) => {
  const dispatch = useDispatch();
  const { branchs } = useSelector((state) => state.branchs);
  const { loading, error, success } = useSelector((state) => state.createSpecialized);

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Đồ án đã được thêm thành công");
      history.push("/admin/specializeds");
      dispatch({ type: NEW_SPECIALIZED_RESET });
    }
  }, [dispatch, error, history, success]);

  const createSpecializedSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("branch", branch);
    dispatch(createSpecialized(myForm));
  };


  return (
    <>
      <MetaData title="THÊM CHUYÊN NGÀNH" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createSpecializedSubmitHandler}
          >
            <h1>THÊM CHUYÊN NGÀNH</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên chuyên ngành"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <select onChange={(e) => setBranch(e.target.value)}>
                <option value="">Chọn ngành</option>
                {branchs.map((item) => (
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

export default CreateSpecialized;