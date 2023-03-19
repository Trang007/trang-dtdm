import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteProjectReducer,
  deleteReviewReducer,
  newProjectReducer,
  newReviewReducer,
  projectDetailsReducer,
  projectReviewsReducer,
  projectsReducer,
} from "./reducers/ProjectReducer";
import {
  deleteCategoryReducer,
  newCategoryReducer,
  categoryDetailsReducer,
  categoriesReducer,
} from "./reducers/CategoryReducer";
import {
  deleteBranchReducer,
  newBranchReducer,
  branchDetailsReducer,
  branchsReducer,
} from "./reducers/BranchReducer";
import {
  deleteClassroomReducer,
  newClassroomReducer,
  classroomDetailsReducer,
  classroomsReducer,
} from "./reducers/ClassroomReducer";

import {
  deleteConfigReducer,
  newConfigReducer,
  configDetailsReducer,
  configsReducer,
} from "./reducers/ConfigReducer";

import {
  deleteCouncilReducer,
  newCouncilReducer,
  councilDetailsReducer,
  councilsReducer,
} from "./reducers/CouncilReducer";

import {
  deleteDepartmentReducer,
  newDepartmentReducer,
  departmentDetailsReducer,
  departmentsReducer,
} from "./reducers/DepartmentReducer";


import {
  deleteFaqReducer,
  newFaqReducer,
  faqDetailsReducer,
  faqsReducer,
} from "./reducers/FaqReducer";

import {
  deleteNotifyReducer,
  newNotifyReducer,
  notifyDetailsReducer,
  notifysReducer,
} from "./reducers/NotifyReducer";

import {
  deleteSchoolYearReducer,
  newSchoolYearReducer,
  schoolyearDetailsReducer,
  schoolyearsReducer,
} from "./reducers/SchoolYearReducer";

import {
  deleteSpecializedReducer,
  newSpecializedReducer,
  specializedDetailsReducer,
  specializedsReducer,
} from "./reducers/SpecializedReducer";

import {
  deleteSupportReducer,
  newSupportReducer,
  supportDetailsReducer,
  supportsReducer,
} from "./reducers/SupportReducer";

import {
  deleteTrainingSystemReducer,
  newTrainingSystemReducer,
  trainingsystemDetailsReducer,
  trainingsystemsReducer,
} from "./reducers/TrainingSystemReducer";

import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";


const reducer = combineReducers({
  projects: projectsReducer,
  projectDetails: projectDetailsReducer,
  createProject: newProjectReducer,
  deleteProject: deleteProjectReducer,

  categories: categoriesReducer,
  categoryDetails: categoryDetailsReducer,
  createCategory: newCategoryReducer,
  deleteCategory: deleteCategoryReducer,

  branchs: branchsReducer,
  branchDetails: branchDetailsReducer,
  createBranch: newBranchReducer,
  deleteBranch: deleteBranchReducer,

  classrooms: classroomsReducer,
  classroomDetails: classroomDetailsReducer,
  createClassroom: newClassroomReducer,
  deleteClassroom: deleteClassroomReducer,

  
  configs: configsReducer,
  configDetails: configDetailsReducer,
  createConfig: newConfigReducer,
  deleteConfig: deleteConfigReducer,

  councils: councilsReducer,
  councilDetails: councilDetailsReducer,
  createCouncil: newCouncilReducer,
  deleteCouncil: deleteCouncilReducer,

  departments: departmentsReducer,
  departmentDetails: departmentDetailsReducer,
  createDepartment: newDepartmentReducer,
  deleteDepartment: deleteDepartmentReducer,

  faqs: faqsReducer,
  faqDetails: faqDetailsReducer,
  createFaq: newFaqReducer,
  deleteFaq: deleteFaqReducer,

  notifys: notifysReducer,
  notifyDetails: notifyDetailsReducer,
  createNotify: newNotifyReducer,
  deleteNotify: deleteNotifyReducer,

  schoolyears: schoolyearsReducer,
  schoolyearDetails: schoolyearDetailsReducer,
  createSchoolYear: newSchoolYearReducer,
  deleteSchoolYear: deleteSchoolYearReducer,

  specializeds: specializedsReducer,
  specializedDetails: specializedDetailsReducer,
  createSpecialized: newSpecializedReducer,
  deleteSpecialized: deleteSpecializedReducer,

  supports: supportsReducer,
  supportDetails: supportDetailsReducer,
  createSupport: newSupportReducer,
  deleteSupport: deleteSupportReducer,

  trainingsystems: trainingsystemsReducer,
  trainingsystemDetails: trainingsystemDetailsReducer,
  createTrainingSystem: newTrainingSystemReducer,
  deleteTrainingSystem: deleteTrainingSystemReducer,
  
  user: userReducer,
  profile: profileReducer,
  favourite: favouriteReducer,
  newReview: newReviewReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  deleteReview: deleteReviewReducer,
  projectReviews: projectReviewsReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
