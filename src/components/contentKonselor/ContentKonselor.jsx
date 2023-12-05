import React from "react";

function ContentKonselor({ children }) {
  return (
    <div className="ml-60">
      <div className="shadow bg-white mt-20 p-10 mx-10 min-h-[80vh] rounded-3xl">
        {children}
      </div>
    </div>
  );
}

export default ContentKonselor;
