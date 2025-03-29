export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
  bio?: string;
  followers?: number;
  following?: number;
  postCount?: number;
}

export interface Post {
  id: string;
  author: User;
  content?: string;
  likes: number;
  comments: number;
  reposts: number;
  views: number;
  image?: string;
  createdAt?: string;
  showMore?: boolean;
  media?: string;
  timeAgo?: string;
}

export interface RecommendedUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
  followers: number;
}

export interface TrendingTopic {
  id: string;
  name: string;
  slug: string;
  category: string;
  postCount: number;
}

export interface ExploreContent {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}
