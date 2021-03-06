import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Profile from '../components/profile'
import ProjectPreview from '../components/project_preview'

const Home: NextPage = () => {
  return (
    <div>
      <Profile/>
      <div className='mt-4'>
        <ProjectPreview/>
      </div>
    </div>
  )
}

export default Home;
