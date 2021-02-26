import React from "react"; 
import { AsyncView, status } from "./index";

export default {
  title: "async-view",
  component: AsyncView,
};
export const Demo = () => {
  return  <>
  {/* <div style={{ height: 1400 }}></div> */}
  <AsyncView state={status.loading}>abc</AsyncView>
  <AsyncView state={status.empty}>
      abc
      <div slot="empty-action">
          <button>返回</button>
      </div>
  </AsyncView>
  <AsyncView state={status.emptyByDeny}>abc</AsyncView>
  <AsyncView state={status.emptyByFilter}>abc</AsyncView>
  <AsyncView state={status.emptyBySearch}>abc</AsyncView>
  <AsyncView state={status.failed}>abc</AsyncView>
  <AsyncView state={status.failedByNetwork}>abc</AsyncView>
  <AsyncView state={status.failedBySever}>abc</AsyncView>
  <AsyncView state={status.failedByTimeout}>abc</AsyncView>
  <AsyncView state={status.ok}>abc</AsyncView>
</>
};
