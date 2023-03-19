import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createNotify, getNotify } from "../../actions/NotifyActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_NOTIFY_RESET } from "../../constans/NotifyConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateNotify = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createNotify);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Thông báo đã được thêm thành công");
      history.push("/admin/notifys");
      dispatch({ type: NEW_NOTIFY_RESET })
      dispatch(getNotify())
    }
  }, [dispatch, error, history, success]);

  const createNotifySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createNotify(myForm));
  };


  return (
    <>
      <MetaData title="THÊM THÔNG BÁO" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createNotifySubmitHandler}
          >
            <h1>THÊM THÔNG BÁO</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên thông báo"
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

export default CreateNotify;