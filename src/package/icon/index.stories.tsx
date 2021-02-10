import React from "react";
import { Icon } from "./index";

var defaults = {
  title: "Icons",
  component: Icon,
};
export default defaults;

export const IconColor = () => (
  <div className="fsdf">
    <div style={{ background: "orange" }}>
      <Icon name="spinner fa-pulse fa-3x fa-fw"></Icon>
      <Icon name="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg"></Icon>
      <Icon name="wheelchair-alt" badge></Icon>
      <Icon name="bath" badge="9"></Icon>
      <Icon name="user-circle" badge="99"></Icon>
      <Icon brand name="weibo" badge="99+"></Icon>
    </div>
    <div>
      <Icon color="#00f" name="bed"></Icon>
      <Icon color="#f00f00" name="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg"></Icon>
      <Icon color="#ff0" name="Servers"></Icon>
      <Icon color="#f0f" name="Cash_Withdraw"></Icon>
      <Icon color="#f00f00" name="Book"></Icon>
      <Icon color="#00f00f" name="Calendar"></Icon>
    </div>
  </div>
);
