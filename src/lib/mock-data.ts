import type { Post, User, ExploreContent } from "./types";

// Mock users
export const mockUsers: User[] = [
  {
    id: "user1",
    name: "Ricky",
    username: "rickydata",
    avatar: "/avatars/ricky.jpg",
    verified: false,
    bio: "Tech enthusiast and AI researcher",
    followers: 1243,
    following: 567,
    postCount: 89,
  },
  {
    id: "user2",
    name: "sunshine vendetta",
    username: "sunshinevendetta",
    avatar: "/avatars/sunshine.jpg",
    verified: false,
    bio: "Digital artist and crypto enthusiast",
    followers: 3421,
    following: 876,
    postCount: 156,
  },
  {
    id: "user3",
    name: "Josh",
    username: "wagmi",
    avatar: "/avatars/josh.jpg",
    verified: true,
    bio: "Building the future of web3",
    followers: 12500,
    following: 342,
    postCount: 278,
  },
  {
    id: "user4",
    name: "winny",
    username: "winny",
    avatar: "/avatars/winny.jpg",
    verified: true,
    bio: "Designer and creator",
    followers: 8765,
    following: 432,
    postCount: 198,
  },
  {
    id: "user5",
    name: "b0gie",
    username: "b0gie",
    avatar: "/avatars/bogie.jpg",
    verified: true,
    bio: "Crypto native. DeFi maximalist.",
    followers: 5432,
    following: 321,
    postCount: 143,
  },
];

// Mock staff picks
export const mockStaffPicks: User[] = [
  mockUsers[2], // Josh
  mockUsers[3], // winny
  mockUsers[4], // b0gie
  {
    id: "user6",
    name: "Mimi Sparkles",
    username: "mimisparkles",
    avatar: "/avatars/mimi.jpg",
    verified: false,
    bio: "Content creator and social media enthusiast",
    followers: 3245,
    following: 876,
    postCount: 432,
  },
  {
    id: "user7",
    name: "Charmlikemagic",
    username: "charmtaylor",
    avatar: "/avatars/charm.jpg",
    verified: false,
    bio: "Artist and illustrator",
    followers: 2134,
    following: 543,
    postCount: 321,
  },
];

// Mock posts
export const mockPosts: Post[] = [
  {
    id: "post1",
    author: mockUsers[0], // Ricky
    content:
      "The new Google Gemini 2.5 Pro model is really impressive, and the next great unlock for agentic coding. Without the paid API having been launched we're back in the era of having access to the best coding model with a chat interface, but can't really take full advantage and not integrated the way sonnet 3.7 is supported everywhere. But in terms of capabilities to me it feels like a jump similar to what sonnet 3.5 had originally given us compared to prior models...",
    likes: 9,
    reposts: 5,
    comments: 1,
    views: 46,
    createdAt: "2025-03-28T15:30:00Z",
    showMore: true,
  },
  {
    id: "post2",
    author: mockUsers[1], // sunshine vendetta
    content: "@kipto Thanks for the tip!",
    media: "/tip-card.png",
    likes: 32,
    reposts: 16,
    comments: 3,
    views: 453,
    createdAt: "2025-03-28T15:05:00Z",
  },
  {
    id: "post3",
    author: mockUsers[2], // Josh
    content:
      "Just launched a new feature on Hey.xyz! Now you can tip your favorite creators directly with $BONSAI tokens. Try it out and let me know what you think!",
    likes: 87,
    reposts: 24,
    comments: 12,
    views: 1243,
    createdAt: "2025-03-28T14:45:00Z",
  },
  {
    id: "post4",
    author: mockUsers[3], // winny
    content:
      "Working on some new designs for the platform. Here's a sneak peek!",
    media: "/placeholder.svg",
    likes: 156,
    reposts: 32,
    comments: 28,
    views: 2134,
    createdAt: "2025-03-28T13:20:00Z",
  },
  {
    id: "post5",
    author: mockUsers[4], // b0gie
    content:
      "The future of social is decentralized. Lens Protocol is just the beginning. Imagine a world where you truly own your content and can take your social graph anywhere.",
    likes: 243,
    reposts: 78,
    comments: 45,
    views: 3421,
    createdAt: "2025-03-28T12:15:00Z",
    showMore: true,
  },
  {
    id: "post6",
    author: mockUsers[0], // Ricky
    content:
      "Just published a new article on the intersection of AI and blockchain. Check it out!",
    media: "/placeholder.svg",
    likes: 67,
    reposts: 21,
    comments: 8,
    views: 876,
    createdAt: "2025-03-28T11:30:00Z",
  },
  {
    id: "post7",
    author: mockUsers[1], // sunshine vendetta
    content: "New art drop coming soon. Stay tuned!",
    likes: 124,
    reposts: 43,
    comments: 15,
    views: 1543,
    createdAt: "2025-03-28T10:45:00Z",
  },
  {
    id: "post8",
    author: mockUsers[2], // Josh
    content:
      "We've just hit 100k users on Hey.xyz! Thank you to everyone who's been part of this journey. We're just getting started!",
    likes: 432,
    reposts: 156,
    comments: 87,
    views: 5432,
    createdAt: "2025-03-28T09:30:00Z",
  },
  {
    id: "post9",
    author: mockUsers[3], // winny
    content:
      "Design tip: Always consider accessibility when choosing color schemes. Here's a great tool I use for checking contrast ratios.",
    likes: 98,
    reposts: 34,
    comments: 12,
    views: 1234,
    createdAt: "2025-03-28T08:15:00Z",
  },
  {
    id: "post10",
    author: mockUsers[4], // b0gie
    content:
      "Just deployed a new smart contract for our token distribution. Gas fees are getting better!",
    likes: 176,
    reposts: 54,
    comments: 23,
    views: 2345,
    createdAt: "2025-03-28T07:00:00Z",
  },
];

// Mock explore content
export const mockExploreContent: ExploreContent[] = [
  {
    id: "explore1",
    title: "NFT Collection Launch",
    description: "Check out this amazing new NFT collection",
    image: "/placeholder.svg",
    type: "post",
  },
  {
    id: "explore2",
    title: "Community Meetup",
    description: "Join us for our monthly community meetup",
    image: "/placeholder.svg",
    type: "post",
  },
  {
    id: "explore3",
    title: "Digital Art Exhibition",
    description: "Featuring works from top digital artists",
    image: "/placeholder.svg",
    type: "photo",
  },
  {
    id: "explore4",
    title: "Web3 Development Workshop",
    description: "Learn how to build on Lens Protocol",
    image: "/placeholder.svg",
    type: "post",
  },
  {
    id: "explore5",
    title: "Creator Economy Panel",
    description: "Discussion on the future of content creation",
    image: "/placeholder.svg",
    type: "video",
  },
  {
    id: "explore6",
    title: "Crypto Market Analysis",
    description: "Weekly review of market trends",
    image: "/placeholder.svg",
    type: "post",
  },
];
