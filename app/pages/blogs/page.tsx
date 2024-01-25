"use client"; // Indicates this file uses client-side React features
import React from 'react';
import { useLoaderData } from 'next/dist/client/components/hooks-server';
import Container from '../../../components/container';
import MoreStories from '../../../components/more-stories';
import HeroPost from '../../../components/hero-post';
import Intro from '../../../components/intro';
import Layout from '../../../components/layout';
import Head from 'next/head';
import { CMS_NAME } from '../../../lib/constants';
import Post from '../../../interfaces/post';
import styles from '../styles/Tags.module.css'; // Import the CSS module for tags
import { getAllPosts } from '../../../lib/getStaticPropsForBlogs';

type Props = {
  allPosts: Post[];
};

export default function BlogsPage({ allPosts }: Props) {
  // Handling the case when there are no posts
  if (!allPosts || allPosts.length === 0) {
    return (
      <Layout>
        <Container>
          <p>No blog posts available.</p>
        </Container>
      </Layout>
    );
  }

  const heroPost = allPosts[0]; // First post as the hero post
  const morePosts = allPosts.slice(1); // Remaining posts

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            tags={heroPost.tags} // Pass tags to HeroPost
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            tagStyles={styles} // Pass the CSS module for tag styling
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps = getAllPosts;
