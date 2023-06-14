// pages/p/[id].tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Router from 'next/router';
import Layout from '../../components/Layout';
import { PostProps } from '../../components/Post';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  });
  await Router.push('/create');
}

// pages/p/[id].tsx

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/create');
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover " style={{backgroundImage: `url('/five.png')`, height: "600px"}}><h1>My Drafts</h1></div>
        <div className="ml-48 mt-10">
        <h2>Email: {title}</h2>
        <p>By: {props?.author?.name || 'Unknown author'}</p>
        <h2>Feedback: </h2>
        <ReactMarkdown children={props.content} />
        {
  !props.published && userHasValidSession && postBelongsToUser && (
    <button className="py-2.5 px-5 mr-2 w-48 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => publishPost(props.id)}>Publish</button>
  )
}
{
  userHasValidSession && postBelongsToUser && (
    <button className="py-2.5 px-5 mr-2 w-48 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"onClick={() => deletePost(props.id)}>Delete</button>
  )
}
        </div>
        
        
      </div>
    </Layout>
  );
};

export default Post;