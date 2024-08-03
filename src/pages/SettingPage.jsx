import React from "react";
import Header from "../components/Layout/Header";
import { TabsComponent } from "../components/TabsSitting/Tabs";
import Payment from "../components/TabsSitting/Payment";
import Container from "../components/Layout/container";

const SettingPage = () => {
  return (
    <div className="w-100 ">
      <Container>
        <Header />
        <TabsComponent />
        <Payment />
      </Container>
    </div>
  );
};

export default SettingPage;
