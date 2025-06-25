import React from "react";
import ContentDetailTrackingID from "@/components/shared/trackingid/ContentDetailTrackingID"

function detailTrackingID() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-text-main font-bold font-inter">
          Tracking ID
        </h1>
      </div>
      <ContentDetailTrackingID />
    </>
  );
}

export default detailTrackingID;
