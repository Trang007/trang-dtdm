import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createFaq, getFaq } from "../../actions/FaqActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_FAQ_RESET } from "../../constans/FaqConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateFaq = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createFaq);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Quy tắc đã được thêm thành công");
      history.push("/admin/faqs");
      dispatch({ type: NEW_FAQ_RESET })
      dispatch(getFaq())
    }
  }, [dispatch, error, history, success]);

  const createFaqSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createFaq(myForm));
  };


  return (
    <>
      <MetaData title="THÊM QUY TẮC" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createFaqSubmitHandler}
          >
            <h1>THÊM QUY TẮC</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên quy tắc"
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

export default CreateFaq;