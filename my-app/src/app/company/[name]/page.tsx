import React from "react";

export default function page({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1>tên công ty:{params.name}</h1>
    </div>
  );
}
