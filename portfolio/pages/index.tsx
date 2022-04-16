import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Header from '../components/header'
import Profile from '../components/profile'
import ProjectPreview from '../components/project_preview'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-slate-500 flex flex-col gap-4">
        <Header/>
        <Profile/>
        <ProjectPreview/>
        <Footer/>
      </div>
    </Layout>
  )
}

export default Home;
