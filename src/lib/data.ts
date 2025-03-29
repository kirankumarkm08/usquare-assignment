import type { Post, RecommendedUser, TrendingTopic } from "./types";

export async function getFeaturedPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      author: {
        id: "user1",
        name: "Ricky",
        username: "rickydata",
        avatar: "/public/avatar/av1.jpeg",
        verified: true,
      },
      content:
        "The new Google Gemini 2.5 Pro model is really impressive, and the next great unlock for agentic coding. Without the paid API having been launched we're back in the era of having access to the best coding model with a chat interface.",
      timeAgo: "7m",
      likes: 9,
      comments: 1,
      reposts: 5,
      views: 46,
    },
    {
      id: "2",
      author: {
        id: "user2",
        name: "sunshine vendetta",
        username: "sunshinevendetta",
        avatar: "/avatar/av12.jpeg",
      },
      content: "Thanks for the tip! @kipto",
      timeAgo: "35m",
      likes: 32,
      comments: 3,
      reposts: 16,
      views: 453,
      image: "/tip-card.png",
    },
    {
      id: "3",
      author: {
        id: "user3",
        name: "Josh",
        username: "wagmi",
        avatar: "/avatars/josh.jpg",
        verified: true,
      },
      content:
        "Just deployed a new update to the platform. Let me know what you think! #LensProtocol #Web3Social",
      timeAgo: "2h",
      likes: 124,
      comments: 18,
      reposts: 42,
      views: 1205,
    },
  ];
}

export async function getUserFeed(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return [
    {
      id: "4",
      author: {
        id: "user4",
        name: "Mimi Sparkles",
        username: "mimisparkles",
        avatar: "/avatar/av2.jpeg",
      },
      content:
        "Just launched my new NFT collection! Check it out at opensea.io/mimisparkles 🎨✨",
      timeAgo: "10m",
      likes: 56,
      comments: 8,
      reposts: 12,
      views: 342,
      image: "/posts/bit.jpeg",
    },
    {
      id: "5",
      author: {
        id: "user5",
        name: "winny",
        username: "winny",
        avatar: "/avatar/av2.jpeg",
        verified: true,
      },
      content:
        "The future of social is decentralized. No more walled gardens, no more algorithm manipulation, just pure content ownership and creator economy. #Web3 #DecentralizedSocial",
      timeAgo: "45m",
      likes: 203,
      comments: 31,
      reposts: 87,
      views: 2104,
    },
    {
      id: "6",
      author: {
        id: "user6",
        name: "b0gie",
        username: "b0gie",
        avatar: "/avatar/av3.jpeg",
        verified: true,
      },
      content:
        "Working on some new features for the Lens Protocol. Can't wait to share what we've been building! 🚀",
      timeAgo: "1h",
      likes: 178,
      comments: 24,
      reposts: 45,
      views: 1876,
    },
    {
      id: "7",
      author: {
        id: "user7",
        name: "Charmlikemagic",
        username: "charmtaylor",
        avatar: "/avatar/av4.jpeg",
      },
      content:
        "Just attended an amazing Web3 conference in Paris. Met so many brilliant minds working on the future of the internet. The energy was incredible! 🌐✨",
      timeAgo: "3h",
      likes: 89,
      comments: 12,
      reposts: 23,
      views: 754,
      image: "/posts/bit.jpeg",
    },
  ];
}

export async function getRecommendedUsers(): Promise<RecommendedUser[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      id: "user8",
      name: "Alex Chen",
      username: "alexcrypto",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
      followers: 12400,
    },
    {
      id: "user9",
      name: "Sarah Web3",
      username: "sarahweb3",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
      followers: 8900,
    },
    {
      id: "user10",
      name: "Crypto Punk",
      username: "cryptopunk",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 5600,
    },
    {
      id: "user11",
      name: "NFT Collector",
      username: "nftcollector",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 3200,
    },
  ];
}

export async function getTrendingTopics(): Promise<TrendingTopic[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  return [
    {
      id: "topic1",
      name: "LensProtocol",
      slug: "lensprotocol",
      category: "Technology",
      postCount: 4582,
    },
    {
      id: "topic2",
      name: "Web3Social",
      slug: "web3social",
      category: "Technology",
      postCount: 2341,
    },
    {
      id: "topic3",
      name: "NFTs",
      slug: "nfts",
      category: "Crypto",
      postCount: 8765,
    },
    {
      id: "topic4",
      name: "DecentralizedSocial",
      slug: "decentralizedsocial",
      category: "Technology",
      postCount: 1876,
    },
  ];
}
