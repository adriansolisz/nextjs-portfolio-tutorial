import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../public/data-analytics-project.jpg'

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <Image src={projectImage}/>
      <div>
        Lorem ipsum dolor sit amet, case antiopam ex per, inermis efficiendi mei at. Decore rationibus eu mei, nec et ignota alterum minimum, odio persecuti cu sed. Eu commune sadipscing eam, nec ad illum detraxit incorrupte. Partem regione electram id has, eam ad stet clita philosophia. 
      </div>
      <div className='mt-6'>
        <Link href="/">
            <a className="font-bold underline hover:text-indigo-600">
              Back
            </a>
        </Link>    
      </div>
    </div>
  )
}

export default DataAnalysis;
