import { Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/landing-page/LandingPage";
import AuthFrame from "../../pages/auth-service/AuthFrame";
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
} from "../../pages";

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
        <Route path="*" element="/dashboard" />
      </Routes>
    </AppLayout>
  </>
);
