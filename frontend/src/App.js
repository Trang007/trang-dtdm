import './App.scss';
import Home from "./component/Home/Home";
import WebFont from "webfontloader";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectDetails from './component/Projects/ProjectDetails';
import LoginSignup from "./component/Authentication/LoginSignup";
import UserData from './more/UserData';
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import { getCategory } from './actions/CategoryActions';
import { getProject } from './actions/ProjectActions';
import Store from "./store";
import ProtectedRoute from './route/ProtectedRoute';
import Profile from "./component/user/Profile";
import UpdatePassword from './component/user/UpdatePassword';
import EditProfile from './component/user/EditProfile';
import About from './component/about/About';
import Projects from "./component/Projects/Projects";
import Search from "./component/Projects/Search";
import Support from "./more/Support";
import Favourites from './component/cart/Favourites';

import Rules from "./more/Rules";
import Contact from "./more/Contact";
import MoreOption from "./component/user/MoreOption"
import Dashboard from './component/Admin/Dashboard';
import CreateProject from './component/Admin/CreateProject';
import AllProjects from "../../frontend/src/component/Admin/AllProjects";
import EditProject from "../../frontend/src/component/Admin/EditProject";

import CreateCategory from './component/Admin/CreateCategory';
import AllCategories from "../../frontend/src/component/Admin/AllCategories";
import EditCategory from "../../frontend/src/component/Admin/EditCategory";


import AllBranchs from "../../frontend/src/component/Admin/AllBranchs";
import AllClassroom from "../../frontend/src/component/Admin/AllClassroom";
import AllConfig from "../../frontend/src/component/Admin/AllConfig";
import AllCouncil from "../../frontend/src/component/Admin/AllCouncil";
import AllDepartment from "../../frontend/src/component/Admin/AllDepartment";
import AllFaq from "../../frontend/src/component/Admin/AllFaq";
import AllNotify from "../../frontend/src/component/Admin/AllNotify";
import AllSchoolYear from "../../frontend/src/component/Admin/AllSchoolYear";
import AllSpecialized from "../../frontend/src/component/Admin/AllSpecialized";
import AllSupport from "../../frontend/src/component/Admin/AllSupport";
import AllTrainingSystem from "../../frontend/src/component/Admin/AllTrainingSystem";

import CreateBranch from './component/Admin/CreateBranch';
import CreateDepartment from './component/Admin/CreateDepartment';
import CreateClassroom from './component/Admin/CreateClassroom';
import CreateConfig from './component/Admin/CreateConfig';
import CreateCouncil from './component/Admin/CreateCouncil';
import CreateFaq from './component/Admin/CreateFaq';
import CreateNotify from './component/Admin/CreateNotify';
import CreateSchoolYear from './component/Admin/CreateSchoolYear';
import CreateSpecialized from './component/Admin/CreateSpecialized';
import CreateSupport from './component/Admin/CreateSupport';
import CreateTrainingSystem from './component/Admin/CreateTrainingSystem';

import AllUsers from "../../frontend/src/component/Admin/AllUsers";
import UpdateUser from "../../frontend/src/component/Admin/UpdateUser";
import AllReviews from "../../frontend/src/component/Admin/AllReviews";
import ForgotPassword from "../../frontend/src/component/user/ForgotPassword";
import ResetPassword from "../../frontend/src/component/user/ResetPassword";
import Notfound from "../../frontend/src/more/Notfound";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    Store.dispatch(getProject());
    Store.dispatch(getCategory());

  }, []);
  return (

    <Router>
      {isAuthenticated && <UserData user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/login" component={LoginSignup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/projects/:keyword" component={Projects} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/faq" component={Rules} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/more" component={MoreOption} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />

        <ProtectedRoute isAdmin={true} exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path="/admin/project" component={CreateProject} />
        <ProtectedRoute isAdmin={true} exact path="/admin/projects" component={AllProjects} />
        <ProtectedRoute isAdmin={true} exact path="/edit/project/:id" component={EditProject} />
        <ProtectedRoute isAdmin={true} exact path="/admin/reviews/:id" component={AllReviews} />

        <ProtectedRoute isAdmin={true} exact path="/admin/branchs" component={AllBranchs} />
        <ProtectedRoute isAdmin={true} exact path="/admin/classrooms" component={AllClassroom} />
        <ProtectedRoute isAdmin={true} exact path="/admin/configs" component={AllConfig} />
        <ProtectedRoute isAdmin={true} exact path="/admin/councils" component={AllCouncil} />
        <ProtectedRoute isAdmin={true} exact path="/admin/departments" component={AllDepartment} />
        <ProtectedRoute isAdmin={true} exact path="/admin/faqs" component={AllFaq} />
        <ProtectedRoute isAdmin={true} exact path="/admin/notifys" component={AllNotify} />
        <ProtectedRoute isAdmin={true} exact path="/admin/schoolyears" component={AllSchoolYear} />
        <ProtectedRoute isAdmin={true} exact path="/admin/specializeds" component={AllSpecialized} />
        <ProtectedRoute isAdmin={true} exact path="/admin/supports" component={AllSupport} />
        <ProtectedRoute isAdmin={true} exact path="/admin/trainingsystems" component={AllTrainingSystem} />
        <ProtectedRoute isAdmin={true} exact path="/admin/categories" component={AllCategories} />

        <ProtectedRoute isAdmin={true} exact path="/admin/category" component={CreateCategory} />
        <ProtectedRoute isAdmin={true} exact path="/admin/department" component={CreateDepartment} />
        <ProtectedRoute isAdmin={true} exact path="/admin/branch" component={CreateBranch} />
        <ProtectedRoute isAdmin={true} exact path="/admin/classroom" component={CreateClassroom} />
        <ProtectedRoute isAdmin={true} exact path="/admin/config" component={CreateConfig} />
        <ProtectedRoute isAdmin={true} exact path="/admin/council" component={CreateCouncil} />
        <ProtectedRoute isAdmin={true} exact path="/admin/faq" component={CreateFaq} />
        <ProtectedRoute isAdmin={true} exact path="/admin/notify" component={CreateNotify} />
        <ProtectedRoute isAdmin={true} exact path="/admin/schoolyear" component={CreateSchoolYear} />
        <ProtectedRoute isAdmin={true} exact path="/admin/specialized" component={CreateSpecialized} />
        <ProtectedRoute isAdmin={true} exact path="/admin/support" component={CreateSupport} />
        <ProtectedRoute isAdmin={true} exact path="/admin/trainingsystem" component={CreateTrainingSystem} />

        <ProtectedRoute isAdmin={true} exact path="/edit/category/:id" component={EditCategory} />

        <ProtectedRoute isAdmin={true} exact path="/admin/users" component={AllUsers} />
        <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </Router>

  );
}

export default App;
