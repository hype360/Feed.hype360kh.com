import { BlogPost } from "@/components/blog-post";

const posts = [
  {
    title: "Laravel Nova 5.0 Now Available",
    excerpt:
      "Laravel Nova 5.0 is now ready for upgrade. This release focuses on modernizing Nova's core dependencies while introducing several useful features to improve resource management and field handling.",
    author: {
      name: "Cynthia Bell McGills",
      image: "https://api.multiavatar.com/Binx Bond.png",
    },
    date: "2024-12-17",
    slug: "laravel-nova-5-now-available",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Vapor: RDS Certificate Authority Expity",
    excerpt:
      "AWS has been providing certificates from the rds-ca-2019 Certificate Authority, but these certificates are due to expire in August 2024. If you are running an RDS instance using this Certificate Authority, it must be updated to prevent any interruption in connectivity after this date.",
    author: {
      name: "Joe Dixon",
      image: "https://api.multiavatar.com/Binx Bond.png",
    },
    date: "2023-09-21",
    slug: "vapor-rds-certificate-authority-expity",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Vapor: Farewell to Debug Logs",
    excerpt:
      "When Vapor handles incoming HTTP requests or queued jobs, it writes debug information to your CloudWatch logs. This includes logging...",
    author: {
      name: "Joe Dixon",
      image: "https://api.multiavatar.com/Binx Bond.svg",
    },
    date: "2023-05-11",
    slug: "vapor-farewell-to-debug-logs",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "React 18: Features and Improvements",
    excerpt:
      "React 18 has been released with exciting new features like automatic batching, concurrent rendering, and updated APIs.",
    author: {
      name: "Sarah Connor",
      image: "https://api.multiavatar.com/Sarah Connor.png",
    },
    date: "2024-01-10",
    slug: "react-18-features-and-improvements",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Tailwind CSS 4.0: What’s New?",
    excerpt:
      "Tailwind CSS 4.0 introduces new utilities, better performance, and expanded customization options for developers.",
    author: {
      name: "Mike Johnson",
      image: "https://api.multiavatar.com/Mike Johnson.png",
    },
    date: "2024-02-14",
    slug: "tailwind-css-4-whats-new",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "How to Secure Your Node.js Apps",
    excerpt:
      "This guide explores the best practices to secure your Node.js applications against common vulnerabilities and attacks.",
    author: {
      name: "Jessica Wang",
      image: "https://api.multiavatar.com/Jessica Wang.png",
    },
    date: "2023-12-05",
    slug: "secure-nodejs-apps",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Exploring SvelteKit: The Next-Gen Framework",
    excerpt:
      "SvelteKit offers a fresh take on building modern web applications with a focus on simplicity and speed.",
    author: {
      name: "Tom Hardy",
      image: "https://api.multiavatar.com/Tom Hardy.png",
    },
    date: "2024-04-22",
    slug: "exploring-sveltekit-next-gen-framework",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Building a REST API with Fastify",
    excerpt:
      "Fastify is gaining popularity as a fast and lightweight framework for building REST APIs in Node.js.",
    author: {
      name: "Ethan Hunt",
      image: "https://api.multiavatar.com/Ethan Hunt.png",
    },
    date: "2023-11-15",
    slug: "building-rest-api-with-fastify",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "The Rise of AI in Web Development",
    excerpt:
      "AI technologies are transforming web development by automating repetitive tasks and improving user experience.",
    author: {
      name: "Emily Rose",
      image: "https://api.multiavatar.com/Emily Rose.png",
    },
    date: "2023-08-30",
    slug: "ai-in-web-development",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Getting Started with Deno",
    excerpt:
      "Deno offers a modern runtime for JavaScript and TypeScript with enhanced security and built-in tools.",
    author: {
      name: "Brian Adams",
      image: "https://api.multiavatar.com/Brian Adams.png",
    },
    date: "2023-06-12",
    slug: "getting-started-with-deno",
    coverImage: "https://picsum.photos/500/200",
  },
  {
    title: "Mastering Docker for Development",
    excerpt:
      "Docker simplifies the development workflow by providing a consistent environment for your applications.",
    author: {
      name: "Sophia Turner",
      image: "https://api.multiavatar.com/Sophia Turner.png",
    },
    date: "2023-03-18",
    slug: "mastering-docker-for-development",
    coverImage: "https://picsum.photos/500/200",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-screen-md">
      {/* Blog Posts */}
      <div className="grid gap-8 grid-cols-1">
        {posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </div>

      {/* RSS Feed */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          Subscribe to our{" "}
          <a
            href="/rss"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            RSS Feed
          </a>{" "}
          for regular updates.
        </p>
      </div>
    </div>
  );
}
