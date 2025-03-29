import React from "react";
import FeedSidebar from "./Feeds-sidebar-data";
import { getTrendingTopics, getRecommendedUsers } from "@/lib/data";

const Recommendeduser = async () => {
  const trendingTopics = await getTrendingTopics();
  const recommendedUsers = await getRecommendedUsers();
  return (
    <div className="">
      <FeedSidebar
        recommendedUsers={recommendedUsers}
        trendingTopics={trendingTopics}
      />
    </div>
  );
};

export default Recommendeduser;
