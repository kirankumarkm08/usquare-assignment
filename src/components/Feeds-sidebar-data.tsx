import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { RecommendedUser, TrendingTopic } from "@/lib/types";

interface FeedSidebarProps {
  recommendedUsers: RecommendedUser[];
  trendingTopics: TrendingTopic[];
}

export default function FeedSidebar({
  recommendedUsers,
  trendingTopics,
}: FeedSidebarProps) {
  return (
    <div className="sticky top-20 space-y-4">
      {/* Search */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-medium">Who to follow</h3>
        <div className="space-y-3">
          {recommendedUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full"
                />
                <div>
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">@{user.username}</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full text-xs"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          className="mt-3 w-full justify-start text-sm text-pink-500 hover:bg-pink-50 hover:text-pink-600"
        >
          Show more
        </Button>
      </div>

      {/* Trending Topics */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-medium">Trending</h3>
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topic/${topic.slug}`}
              className="block rounded-md p-2 hover:bg-gray-50"
            >
              <div className="text-xs text-gray-500">{topic.category}</div>
              <div className="font-medium">#{topic.name}</div>
              <div className="text-xs text-gray-500">
                {topic.postCount} posts
              </div>
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          className="mt-3 w-full justify-start text-sm text-pink-500 hover:bg-pink-50 hover:text-pink-600"
        >
          Show more
        </Button>
      </div>
    </div>
  );
}
