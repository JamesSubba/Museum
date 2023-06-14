import Layout from "../components/Layout"
import { PostProps } from "../components/Post"
import FrameByFrameScroll from "../components/FrameByFrameScroll";
import Footer from "@/components/Footer";



type Props = {
  feed: PostProps[]
}

const about: React.FC<Props> = (props) => {
  
  return (
    <Layout>
       <div className="absolute top-0 left-0 right-0 bottom-0  z-[2] flex items-center justify-center flex-col space-y-100"> 
          <div className="pr-[600px] pt-[1100px]">
            <h1 className="text-5xl pt-3 pb-3">VISION</h1>
            <hr className="h-3 w-24 border-white pb-5" />
            <p className="text-white opacity-80 ">Our vision is to revolutionize the preservation and accessibility of arts<br/> and artifacts by leveraging the power of technology. We aim to create a<br/> virtual museum that transcends physical limitations, providing a uniqu<br/> and immersive experience for users worldwide.</p>
          </div>

          <div className="pl-[600px] pt-[900px]">
            <h1 className="text-5xl pt-3 pb-3">MISSION</h1>
            <hr className="h-3 w-24 border-white pb-5" />
            <p className="text-white opacity-80 ">Our mission is to develop a cutting-edge virtual museum that redefines<br/> the preservation and exploration of arts and artifacts. We are committed to <br/>leveraging technology to create a seamless and captivating experience for<br/> users, enabling them to engage with historical treasures in ways never before.</p>
          </div>

        </div>
        
      <FrameByFrameScroll />

    </Layout>
  )
}

export default about
