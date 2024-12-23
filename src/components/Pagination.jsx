import Link from 'next/link'

export default function Pagination() {
  return (
    <nav className="flex justify-center mt-16 mb-8 gap-6">
      <Link
        href="#"
        className="px-6 py-3 rounded-lg bg-white shadow-custom text-primary hover:bg-accent transition-all duration-300 font-medium"
      >
        Previous
      </Link>
      <Link
        href="#"
        className="px-6 py-3 rounded-lg bg-white shadow-custom text-primary hover:bg-accent transition-all duration-300 font-medium"
      >
        Next
      </Link>
    </nav>
  )
}