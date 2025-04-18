import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Insights, trends, and best practices in digital marketing and web
            development
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-gray-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest articles and resources sent straight to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

// Mock data
const blogPosts = [
  {
    title: "The Future of Web Design in 2024",
    excerpt:
      "Explore the emerging trends that will shape web design in the coming year.",
    date: "May 15, 2024",
    category: "Web Design",
    slug: "future-of-web-design-2024",
    image: "/assets/web-design-trends.jpg",
    author: {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/assets/team-member2.png",
    },
  },
  {
    title: "SEO Strategies for E-commerce Success",
    excerpt:
      "Learn how to optimize your online store for better search engine visibility.",
    date: "April 28, 2024",
    category: "Digital Marketing",
    slug: "seo-strategies-ecommerce",
    image: "/assets/ecommerce-seopng.png",
    author: {
      name: "David Kim",
      role: "Marketing Director",
      image: "/assets/team-member2.png",
    },
  },
  {
    title: "Building a Strong Brand Identity",
    excerpt:
      "Discover the key elements that make a brand memorable and recognizable.",
    date: "April 10, 2024",
    category: "Branding",
    slug: "building-brand-identity",
    image: "/assets/brand-identity.jpg",
    author: {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/assets/team-member2.png",
    },
  },
];
