import React, { useEffect, useState } from "react";
import "./newAndEdit.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProject, getProjectDetails, getAdminProject } from "../../actions/ProjectActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { UPDATE_PROJECT_RESET } from "../../constans/ProjectConstans";
import { ToastContainer, toast } from 'react-toastify';

const UpdateProject = ({ history, match }) => {

  const dispatch = useDispatch();

  const { error, project } = useSelector((state) => state.projectDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteProject);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);


  const { categories } = useSelector((state) => state.categories);

  const projectId = match.params.id;

  useEffect(() => {
    if (project && project._id !== projectId) {
      dispatch(getProjectDetails(projectId));
    } else {
      setName(project.name);
      setDescription(project.description);
      setCategory(project.category);
      setOldImages(project.images);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Đồ án đã được sửa thành công");
      history.push("/admin/projects");
      dispatch({ type: UPDATE_PROJECT_RESET });
      dispatch(getAdminProject())
    }
  }, [dispatch, error, history, isUpdated, projectId, project, updateError]);

  const updateProjectSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("category", category);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProject(projectId, myForm));
  };

  const updateProjectImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  return (
    <>
      <MetaData title="Sửa đồ án" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            encType="multipart/form-data"
            onSubmit={updateProjectSubmitHandler}
          >
            <h1>Sửa đồ án</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Tên dự án"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Mô tả dự án"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Chọn danh mục</option>
                {categories.map((cate) => (
                  <option key={cate._id} value={cate._id}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>

            <div id="createFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProjectImagesChange}
                multiple
              />
            </div>

            <div id="createFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Project Preview" />
                ))}
            </div>

            <div id="createFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Project Preview" />
              ))}
            </div>

            <Button
              id="createBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Cập nhật
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

export default UpdateProject;