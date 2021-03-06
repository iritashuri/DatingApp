import React from "react";
import PageTitle from "../pageLayout/PageTitle";
import AboutForm from "./AboutForm";
import LookingForForm from "./LookingForForm";

const SettingPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Settings" />
      <AboutForm />
      <LookingForForm />
    </>
  );
};

export default SettingPage;
