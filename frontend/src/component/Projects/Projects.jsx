import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import ProjectCard from "./ProjectCard";
import { clearErrors, getProject } from "../../actions/ProjectActions";
import Pagination from "react-js-pagination";
import "./Project.css";
import Typography from "@material-ui/core/Typography"
// import { useAlert } from "react-alert";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";


const Projects = ({ match }) => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const {
    projects,
    loading,
    error,
    projectsCount,
    resultPerPage,
  } = useSelector((state) => state.projects);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors())
    }
    dispatch(getProject(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Đồ án" />
          <Header />
          <div>
            {projects.length === 0 ?
              ""
              :
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
                Đồ án nổi bật
              </h2>
            }
            <div className="sidebar__project" style={{
              display: "flex",
              flex: 1,
            }}>
              <div className="sidebar__projects" style={{
                border: "1px solid #999",
                margin: "1vmax",
                flex: ".177"
              }}>
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  CHỌN DANH MỤC</Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category._id}
                      onClick={() => setCategory(category)}
                      type="checkbox">
                      {category.name}
                    </li>
                  ))}
                </ul>
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>ĐƯỜNG DẪN NHANH</Typography>
                <li className="category-link">
                  Yêu thích
                </li>
              </div>

              {projects.length === 0 ?
                <span style={{
                  display: "block",
                  padding: "30px 0",
                  fontSize: "1.5rem",
                  flex: ".9",
                  textAlign: "center"
                }}>Không tìm thấy dự án ....</span>
                :
                <div
                  className="projects"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flex: ".9"
                  }}
                >
                  {projects &&
                    projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              }

            </div>

            <div
              className="pagination__box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "6vmax",
              }}
            >
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={projectsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Projects;
