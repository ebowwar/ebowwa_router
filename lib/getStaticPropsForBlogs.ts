// lib/getStaticPropsForBlogs.ts
import { getAllPosts } from '../lib/api';
import Post from '@/interfaces/post';

export async function getStaticPropsForBlogs() {
  const allPosts: Post[] = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
