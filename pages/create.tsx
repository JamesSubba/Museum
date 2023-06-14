import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import Post, { PostProps } from "../components/Post"
import prisma from '../lib/prisma';
import { GetStaticProps } from "next"
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[]
}

const Draft: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <div >
        <div className="flex items-center justify-center h-[600px] bg-fixed bg-center bg-cover " style={{backgroundImage: `url('/five.png')`}}><h1 className="text-5xl">REVIEW</h1></div>
      <div>
        <div className="flex justify-between mx-36 mt-20">
          <h1>(8) Reviews</h1>
          <Link className="btn" href="#section-1" onClick={handleScroll}>
           Add a reivew
          </Link>
        </div>
        <div className="flex items-center justify-center">
        <hr className="my-6 w-10/12 border-gray-900 dark:border-gray-700" />
        
        </div>
        <div className="ml-48 mt-10">
          {props.feed.map((post) => (
              <div key={post.id} className="py-6 ">
                <Post post={post} />
                <hr className="my-6 w-10/12 border-gray-900 dark:border-gray-700" />
              </div>
            ))}
        </div>
          
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img pb-6" style={{backgroundImage: `url('/four.png')`, height: "600px"}}>
      <h1 className="text-4xl pb-2">Add your review</h1>
      <h1 className="text-1xl pb-8">Your feedback can immensly help us improve our product</h1>
      <form className="w-6/12 backdrop-blur-sm bg-white/30 rounded-lg" onSubmit={submitData}>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2"></h2>
            <div
          className="grid place-content-center bg-gray-100"
          id="section-1"
        >
        </div>
        </div>
        <div >
        
          <div className="m-6">
          <input
            autoFocus
            className="bg-white-50 border border-white-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Email"
            type="email"
            value={title}
          />
          </div>
          <div className="m-6">
          <textarea
            cols={50}
            className="bg-white-50 border border-white-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          </div>
          <div className="flex items-center justify-center">
            <input className="py-2.5 px-5 mr-2 w-48 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" disabled={!content || !title} type="submit" value="Submit" />
          </div>
          {/* <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a> */}
        </div>
          
        </form>
      </div>
      </div>

    </Layout>
  );
};

export default Draft;