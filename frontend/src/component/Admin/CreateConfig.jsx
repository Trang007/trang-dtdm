import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createConfig, getConfig } from "../../actions/ConfigActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_CONFIG_RESET } from "../../constans/ConfigConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateConfig = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createConfig);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Liên kết đã được thêm thành công");
      history.push("/admin/configs");
      dispatch({ type: NEW_CONFIG_RESET })
      dispatch(getConfig())
    }
  }, [dispatch, error, history, success]);

  const createConfigSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createConfig(myForm));
  };


  return (
    <>
      <MetaData title="THÊM LIÊN KẾT" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createConfigSubmitHandler}
          >
            <h1>THÊM LIÊN KẾT</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên liên kết"
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

export default CreateConfig;