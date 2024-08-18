import { useRouter } from "next/router";
import React from "react";

const UserPosts: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Danh sách bài viết của User Id: {id}</div>;
};

export default UserPosts;
