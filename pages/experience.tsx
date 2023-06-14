import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats, Sparkles, useAnimations, useGLTF, useTexture } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/Ground';
import Trees from '../components/Trees';
import Player from '../components/Player';
import { Artifact1 } from '../components/Artifact1';
import Layout from "../components/Layout"
import { Sky } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Suspense } from 'react'
import { Environment } from '@react-three/drei';



const Home: NextPage = () => {
  const testing = false;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    // const [shiny, setShiny] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    const handleClick2 = () => {
      setIsOpen2(!isOpen2);
    };

    const Artifact2 = () => {
      const model = useGLTF("./models/artifact2.glb")
      const {actions} = useAnimations(model.animations, model.scene);
    
      useEffect(()=> {
        actions?.Rotate?.play()
      }, [])
      return(<group onClick={handleClick2} position={[50,-0.5,-200]} >
        <primitive object={model.scene}/>
      </group>);  
    }

  return (
    <Layout>
      
    <div className="flex items-center justify-center h-screen">
    <div className={"fixed flex items-center justify-center w-full z-10 ease-in duration-300"}>
        <div className={isOpen ? 'card open' : 'card'}>
      <div></div>
      {isOpen && <div className="flex flex-col items-center h-[42rem] w-[72rem] w-justify-center  overflow-auto p-6 bg-white   shadow  dark:bg-black/90">
        <div className="flex items-center justify-center space-x-[900px]">
        <h1>The Mask of Death</h1>
        <div  onClick={handleClick}>Close</div>
        </div>
        <Image src="/AR-1.png" alt="artifact1" width={350} height={380}/>
    
        <div className="w-[800px]">
          <h2>Details</h2>
          <br/>
          <p>The Mask of Tutankhamun, also known as the Death Mask of Tutankhamun, is an extraordinary artifact that has captivated the world with its beauty and historical significance. This iconic mask was discovered by the renowned archaeologist Howard Carter in 1922 within the innermost chamber of the young pharaoh's tomb in the Valley of the Kings, Egypt. Tutankhamun, who reigned during the 14th century BCE, died at a young age, and his lavishly decorated burial chamber remained hidden and undisturbed for over 3,000 years. <br/><br/>

Crafted with meticulous detail and incredible artistry, the mask is a stunning portrayal of Tutankhamun's face. It is made entirely of solid gold and weighs around 24 pounds (11 kilograms). The mask features a serene expression with finely sculpted features, including almond-shaped eyes, arched eyebrows, and full, plump lips. It is adorned with exquisite materials, such as vibrant blue lapis lazuli inlays for the eyebrows and a broad collar made of multiple rows of semi-precious stones and colored glass. The chin is decorated with a ceremonial beard, symbolizing the pharaoh's divine status. <br/><br/>

The mask served both a practical and symbolic purpose in ancient Egyptian culture. Its primary function was to act as a protective covering for the mummified remains of Tutankhamun. However, it also held significant religious and spiritual significance. Ancient Egyptians believed that the pharaohs were divine beings and that the mask, through its intricate craftsmanship and use of precious materials, would ensure the ruler's eternal well-being and facilitate their journey into the afterlife. <br/><br/> The Mask of Tutankhamun holds immense cultural and historical significance. Its discovery within the pharaoh's tomb in the 1920s sparked worldwide fascination and shed light on the mysterious and enigmatic world of ancient Egypt. The mask is not only a representation of artistic mastery but also a testament to the importance of funerary rituals and beliefs in the afterlife within ancient Egyptian society. The mask's intricate design and lavish use of gold symbolize the pharaoh's status as a divine ruler and emphasize the wealth and power associated with the Egyptian monarchy.<br/><br/>

Beyond its historical significance, the Mask of Tutankhamun has also played a prominent role in popular culture. Its iconic image has been widely reproduced and referenced in books, movies, and various forms of media. The mask's allure has inspired countless artists, historians, and enthusiasts to delve deeper into the mysteries of ancient Egypt and its royal heritage. Even today, the mask continues to captivate audiences worldwide, serving as a tangible connection to an ancient civilization and a symbol of the enduring fascination with Egypt's rich history.

Today, the Mask of Tutankhamun stands as an iconic symbol of ancient Egypt's rich history and artistic achievements. It is a testament to the skill and craftsmanship of the artisans of that era and offers a glimpse into the grandeur and opulence of the pharaoh's reign. Displayed in the Egyptian Museum in Cairo, this remarkable artifact continues to inspire awe and admiration, inviting visitors to marvel at the splendor of Egypt's ancient past.<br/><br/>
</p></div>
      </div>}
      
    </div>
    </div>
    <div className={"fixed flex items-center justify-center w-full z-10 ease-in duration-300"}>
        <div className={isOpen ? 'card open' : 'card'}>
      <div></div>
      {isOpen2 && <div className="flex flex-col items-center h-[42rem] w-[72rem] w-justify-center  overflow-auto p-6 bg-white   shadow  dark:bg-black/90">
        <div className="flex items-center justify-center space-x-[900px]">
        <h1>Shrinathji idol</h1>
        <div  onClick={handleClick2}>Close</div>
        </div>
        <Image src="/AR-2.png" alt="artifact1" width={400} height={400}/>
    
        <div className="w-[800px]">
          <h2>Details</h2>
          <p>The Shrinathji idol is a renowned representation of Lord Krishna as a child deity, situated in the Shrinathji Temple of Nathdwara, Rajasthan, India. This magnificent statue stands as a testament to Lord Krishna's divine love and grace, captivating devotees and visitors alike with its charm and mystical allure.<br/><br/>

The history of the Shrinathji idol can be traced back to the late 15th century when it was discovered by Vallabhacharya, a prominent Hindu saint and founder of the Pushti Marg sect. It is believed that the idol was originally enshrined in the Govardhan Hill near Mathura, but due to various invasions and threats, it was later moved to different locations before finding its permanent abode in Nathdwara. The idol holds immense historical and cultural significance, symbolizing Lord Krishna's divine presence and his eternal love for his devotees.<br/><br/>

The Shrinathji idol stands approximately 2 feet tall, crafted from exquisite black marble. Lord Krishna is depicted as a child deity, with his left hand raised, holding a flute, and his right hand in a gesture of blessing. The idol is adorned with intricate jewelry, garments, and a distinctive peacock feather crown, symbolizing Lord Krishna's enchanting beauty and divine royalty. The charming representation of Lord Krishna as a child exudes a sense of innocence, playfulness, and approachability, evoking a deep sense of devotion and love in the hearts of devotees.<br/><br/>

The Shrinathji idol holds a special place in the hearts of millions of devotees worldwide, particularly followers of the Pushti Marg sect. Devotees believe that the idol is not just a representation but a living form of Lord Krishna, capable of bestowing immense blessings and grace upon those who approach with love and devotion. The idol is worshipped with elaborate daily rituals, including the offering of various delicacies, music, and dance performances known as "sevas" and "bhajans." Devotees engage in "Darshan," the act of beholding the divine presence, and experience a profound spiritual connection with Lord Krishna.<br/><br/>

Over the centuries, the Shrinathji idol has been associated with numerous miraculous legends and tales. Devotees believe that the idol has the power to fulfill their desires, offer protection, and bestow divine blessings. The idol is believed to have moved, spoken, and displayed expressions of love and compassion, reinforcing the faith and devotion of the devotees. These miraculous occurrences further enhance the idol's significance and attract devotees from far and wide.<br/><br/>

The Shrinathji idol is not only a religious icon but also a symbol of India's rich cultural and artistic heritage. The statue's craftsmanship, intricacy, and attention to detail reflect the exceptional skills of the artisans of Rajasthan. The idol has been an inspiration for various art forms, including painting, sculpture, and poetry, with artists attempting to capture the divine beauty and aura of Lord Krishna through their creations.<br/><br/>

In conclusion, the Shrinathji idol stands as a beacon of devotion, love, and grace, symbolizing Lord Krishna's eternal presence and his divine affection for his devotees. It continues to draw countless pilgrims and admirers, seeking solace, blessings, and a glimpse of the divine. The captivating charm and spiritual aura of the Shrinathji idol make it an enduring symbol of Lord Krishna's divinity, inspiring devotees to deepen their devotion and experience the profound love and grace of the beloved deity.</p> </div>
      </div>}
      
    </div>
    </div>
      <Canvas shadows camera={{ position: [-45, 10, 36], fov: 25 }}> 
        <Sky/>
        <fog attach="fog" args={["#90EE90", 40, 530]} />
        <Sparkles noise={0} count={500} speed={1} size={50} color={"#FFD2BE"} opacity={2} scale={[200,20,200]}></Sparkles>
        <Sparkles noise={0} count={500} speed={0.5} size={50} color={"#FFF"} opacity={2} scale={[300,20,100]} ></Sparkles>
        {testing? <Stats/>: null}
        {testing? <axesHelper args={[2]}/>: null}
        {testing? <gridHelper args={[10, 10]}/>: null}
        <OrbitControls/>
        <color args={[1, 1, 1]} attach="background" />
        <Trees boundary={100} count={20}/>
        <Lights/>
        <Artifact1 onClick={handleClick}/>
        <Artifact2/>
        <Player/>
        {/* <DarkGround/> */}
        <Environment preset="sunset" background />
        <Ground/>
      </Canvas> 
    </div>
    </Layout>
  )
} 
 
export default Home
