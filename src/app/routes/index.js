import { Routes, Route } from "react-router-dom";

import LandingPage from "../../pages/landing-page/LandingPage";
import AppLayout from "../generic/AppLayout";
import {
  MyDiet,
  Dashboard,
  MyDoctor,
  Playlist,
  SleepHygine,
  TaskManagement,
  Techniques,
  PsychoEducation,
  ScribbleSpace,
  Analytics,
  MyReports,
  MyProfile,
} from "../../pages";
import { SleepDiaryForm } from "../../pages/dashboard/ui";
import DoctorsDetail from "../../pages/my-doctor/ui/DoctorsDetail";
import AuthFrame from "../../auth-service/AuthFrame";

export const sleepWithPees = (
  <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<AuthFrame />} />
    </Routes>
    <AppLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-diet" element={<MyDiet />} />
        <Route path="/sleep-hygine" element={<SleepHygine />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/my-doctor" element={<MyDoctor />} />
        <Route path="/psycho-education" element={<PsychoEducation />} />
        <Route path="/sleep-diary" element={<SleepDiaryForm />} />
        <Route path="/my-scribble-space" element={<ScribbleSpace />} />
        <Route path="/doctors-details/:id" element={<DoctorsDetail />} />
        <Route path="/analytics-and-suggestions" element={<Analytics />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/my-profile" element={<MyProfile />} />
        {/* <Route path="*" element={<Dashboard />} /> */}
      </Routes>
    </AppLayout>
  </>
);
