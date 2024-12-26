import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Simulating API call with trimmed content
const getPostBySlug = (slug: string) => {
  const fullContent = `
<div class="mb-8">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">Introduction to Web Development</h2>
    <p class="text-gray-800 mb-4 leading-relaxed">
      Web development has evolved significantly over the past two decades. From static HTML pages to 
      interactive web applications, the landscape of web development has shifted to meet the needs 
      of an increasingly digital world. Today, developers have a wide variety of frameworks, libraries, 
      and tools at their disposal to create seamless, performant, and user-friendly experiences.
    </p>
    <p class="text-gray-800 leading-relaxed">
      With the advent of cloud computing, progressive web apps, and artificial intelligence, 
      the web is becoming more powerful and versatile than ever. Developers are not just building 
      websites but creating experiences that bridge the gap between the physical and digital worlds.
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">The Role of Frameworks in Web Development</h2>
    <p class="text-gray-800 mb-4 leading-relaxed">
      Frameworks play a crucial role in modern web development. They provide pre-written code 
      and reusable components, helping developers avoid reinventing the wheel. Popular frameworks 
      like React, Angular, and Vue.js are widely used to build dynamic, interactive user interfaces.
    </p>
    <p class="text-gray-800 leading-relaxed">
      Each framework has its strengths and use cases, and choosing the right one depends on 
      the project requirements. For example, React.js is renowned for its component-based architecture, 
      Angular is a full-featured framework with TypeScript support, and Vue.js offers progressive 
      adoption for varying project sizes.
    </p>
  </div>

  <div>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
    <p class="text-gray-800 mb-4 leading-relaxed">
      Web development is a constantly evolving field, and frameworks like React, Angular, Vue, 
      and Next.js provide developers with powerful tools to build modern applications. By understanding 
      the strengths and weaknesses of each framework and following best practices, developers can create 
      high-performance, user-friendly websites and applications.
    </p>
    <p class="text-gray-800 leading-relaxed">
      As web technologies continue to evolve, staying up-to-date with the latest trends and tools 
      is essential for building successful web projects. Whether you're a seasoned developer or just 
      starting your journey, embracing these advancements will ensure you're prepared for the challenges 
      and opportunities of modern web development.
    </p>
  </div>

  `;
  return {
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13.",
    date: "2023-04-15",
    author: {
      name: "Jane Doe",
      image: "https://api.multiavatar.com/JaneDoe.png",
    },
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"],
    slug: "getting-started-with-nextjs-13",
    imageUrl: "https://picsum.photos/1200/630",
    content: fullContent.slice(0, 5000),
  };
};

interface BlogPostPageProps {
  params: { slug: string };
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ params }) => {
  const post = getPostBySlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
      </Head>

      <article className="space-y-8">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-2 text-sm">Published on {post.date}</p>
        </header>

        {/* Main Image */}
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-lg shadow-lg"
        />

        {/* Author Info */}
        <div className="flex items-center space-x-4 mt-4">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full border"
          />
          <p className="text-gray-600">{post.author.name}</p>
        </div>

        {/* Content */}
        <section className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Branding */}
            <div className="text-center">
              <h2 className="text-white text-lg font-bold">Hype369kh.com</h2>
              <p>
                Built with ❤️ and{" "}
                <a href="https://tailwindcss.com" className="hover:underline">
                  TailwindCSS
                </a>
                .
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {["facebook", "twitter", "github", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="hover:text-white transition"
                  title={icon.charAt(0).toUpperCase() + icon.slice(1)}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>

            {/* Footer Bottom */}
            <p className="text-center text-sm">
              &copy; {new Date().getFullYear()} Hype369kh.com. All rights
              reserved.
            </p>
            <div className="text-center space-x-2">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:underline"
              >
                Privacy Policy
              </a>
              |
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;
