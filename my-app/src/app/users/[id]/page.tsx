import { useRouter } from "next/router";
import React from "react";

const UserDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>User Id: {id}</div>;
};

export default UserDetail;
