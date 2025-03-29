import React from "react";
import { Suspense } from "react";
import PostList from "./PostList";
import { getUserFeed } from "@/lib/data";
import FeedSkeleton from "./Feed-skeleton";
import FeedSidebar from "./Feedsidebar";

const Feeds = async () => {
  const feedData = await getUserFeed();
  return (
    <div className="mt-4 flex  flex-col md:flex-row gap-10 max-w-[1200px] mx-auto ">
      <Suspense fallback={<FeedSkeleton />}>
        <PostList posts={feedData} />
      </Suspense>
      <FeedSidebar />
    </div>
  );
};

export default Feeds;
