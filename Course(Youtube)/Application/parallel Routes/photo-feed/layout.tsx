import React from "react";

const PhotoFeedLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default PhotoFeedLayout;
