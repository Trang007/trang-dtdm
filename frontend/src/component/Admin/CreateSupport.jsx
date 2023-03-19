import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createSupport, getSupport } from "../../actions/SupportActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_SUPPORT_RESET } from "../../constans/SupportConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateSupport = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createSupport);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Hỗ trợ đã được thêm thành công");
      history.push("/admin/supports");
      dispatch({ type: NEW_SUPPORT_RESET })
      dispatch(getSupport())
    }
  }, [dispatch, error, history, success]);

  const createSupportSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createSupport(myForm));
  };


  return (
    <>
      <MetaData title="THÊM HỖ TRỢ" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createSupportSubmitHandler}
          >
            <h1>THÊM HỖ TRỢ</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên hỗ trợ"
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

export default CreateSupport;