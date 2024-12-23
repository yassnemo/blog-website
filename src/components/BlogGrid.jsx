import BlogCard from './BlogCard'
import Pagination from './Pagination'

export default function BlogGrid({ posts }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}