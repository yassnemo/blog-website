import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col h-full">
          <div className="relative h-48">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-primary mb-2">{post.title}</h2>
            <div className="text-gray-600 text-sm mb-3">
              {post.date} • {post.readTime} min read
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <span className="text-accent font-semibold hover:text-primary">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}