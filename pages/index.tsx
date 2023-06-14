import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <motion.div>
    <Layout>

      <div className="flex items-center pl-[250px] h-screen bg-fixed bg-center bg-cover " style={{backgroundImage: `url('/one.png')`}}>
        <div className="top-0 bottom-0  z-[2]"> 
          <div>
            <h1>Virtual Museum</h1>
            <h1 className="text-5xl pt-3 pb-3">HOME PAGE</h1>
            <hr className="h-3 w-24 border-white pb-5" />
            <p>
Unveiling the Past, Empowering the Future: Step into our virtual museum,<br/> where the treasures of history come alive, inviting you to explore,<br/> learn, and be inspired.</p>
            <div className="flex items-center pl-10 pt-5">
              <h1 >Experience</h1>
              <div className="pl-3">

              <Link href="/experience" legacyBehavior>
              
              <button type="button" className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800 dark:hover:bg-white-500">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pl-[900px] h-screen bg-cover bg-center " style={{backgroundImage: `url('/two.png')`}}>
      <div className="text-black">
        
            <h1 className="text-5xl pt-3 pb-3">Who are we?</h1>
            <hr className="h-3 w-24 border-black pb-5" />
            <p>Preserving Heritage, Unlocking Possibilities: We are a dedicated <br/> team passionate about leveraging technology to safeguard and<br/> share the beauty of art and culture, empowering individuals to <br/>connect with the past and embrace limitless possibilities for the future.</p>
            <div className="flex items-center pl-10 pt-5">
              <h1 >About Us</h1>
              <div className="pl-3">
              <Link href="/about" legacyBehavior>
              <button type="button" className="text-black-700 border border-black-700  focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-black dark:text-black dark:focus:ring-black">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              </Link>
              
              </div>
              
            </div>    
      </div>
    </div>
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover " style={{backgroundImage: `url('/three.png')`, height: "1080px"}}>
      <div className="flex flex-col items-center justify-cente" >
            <h1 className="text-5xl pt-3 pb-4">THEIR WORDS</h1>
            <hr className="h-3 w-36 border-white" />
            <div className="flex items-center justify-center space-x-8 pt-5">
              <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 rounded-md bg-white   shadow hover:bg-gray-500 dark:bg-gray-500/50 dark:hover:bg-gray-500">
                <p className="font-normal text-white-700 dark:text-white-400 text-center pt-4">An immersive and educational journey through time and art, the virtual museum captivates with its stunning 3D artifacts and seamless user experience.</p>
                <p className="mb-2  font-bold tracking-tight text-gray-400 dark:text-white-100 pt-3">Kunzang Tshering</p>
              </a>
              <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 rounded-md bg-white  shadow hover:bg-gray-500 dark:bg-gray-500/50 dark:hover:bg-gray-500">
                <p className="font-normal text-white-700 dark:text-white-400 text-center pt-4">Unlock the doors to a boundless world of art and history, as our virtual museum invites you to embark on a captivating journey that transcends time and space.</p>
                <p className="mb-2  font-bold tracking-tight text-gray-400 dark:text-white-100 pt-3">Kisan Rai</p>
              </a>
              <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 rounded-md bg-white   shadow hover:bg-gray-500 dark:bg-gray-500/50 dark:hover:bg-gray-500">
                <p className="font-normal text-white-700 dark:text-white-400 text-center pt-4">Embark on a transformative digital exploration of art and heritage, as our virtual museum unveils the beauty of the past, empowering a global community of curious minds.</p>
                <p className="mb-2  font-bold tracking-tight text-gray-400 dark:text-white-100 pt-3">Tshering Wangchuk</p>
              </a>
            </div>
            <div className="pt-10 ">
              <Link href="/create">
              <button className="text-gray-300">Read More Reviews</button>
              </Link>
            </div>
      </div>
    </div>
    </Layout>
    </motion.div>
  )
}

export default Blog
