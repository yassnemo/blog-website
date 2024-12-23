import Head from 'next/head'
import Layout from '../components/Layout'
import BlogGrid from '../components/BlogGrid'
import Header from '../components/Header'
import { blogPosts } from '../data/blogPosts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Yassine Erradouani</title>
        <meta name="description" content="Personal blog by Yassine Erradouani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <BlogGrid posts={blogPosts} />
        </main>
      </Layout>
    </>
  )
}