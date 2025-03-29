import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Repeat2,
  BarChart2,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/types";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{post.author.name}</span>
                    <span className="text-sm text-gray-500">
                      @{post.author.username} · {post.timeAgo}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="whitespace-pre-line">{post.content}</p>
                    {post.image && (
                      <div className="mt-3 overflow-hidden rounded-xl border border-gray-100">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-600"
              >
                <MoreHorizontal size={16} />
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                <MessageCircle size={18} />
                <span className="text-sm">{post.comments}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 rounded-full text-gray-500 hover:bg-green-50 hover:text-green-600"
              >
                <Repeat2 size={18} />
                <span className="text-sm">{post.reposts}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500"
              >
                <Heart size={18} />
                <span className="text-sm">{post.likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                <BarChart2 size={18} />
                <span className="text-sm">{post.views}</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
