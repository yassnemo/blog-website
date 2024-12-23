export default function Header() {
  return (
    <div className="relative h-[400px] bg-primary">
      <div className="absolute inset-0 bg-black/50"></div>
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        alt="Blog Header"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-2xl px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-white">
            Sharing my thoughts on software development, technology, and personal growth
          </p>
        </div>
      </div>
    </div>
  )
}