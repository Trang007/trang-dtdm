import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCouncil, getCouncil } from "../../actions/CouncilActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_COUNCIL_RESET } from "../../constans/CouncilConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateCouncil = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createCouncil);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Hội đồng đã được thêm thành công");
      history.push("/admin/councils");
      dispatch({ type: NEW_COUNCIL_RESET })
      dispatch(getCouncil())
    }
  }, [dispatch, error, history, success]);

  const createCouncilSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createCouncil(myForm));
  };


  return (
    <>
      <MetaData title="THÊM HỘI ĐỒNG" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createCouncilSubmitHandler}
          >
            <h1>THÊM HỘI ĐỒNG</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên hội đồng"
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

export default CreateCouncil;