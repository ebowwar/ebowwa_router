import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from '../interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map(file => file.replace(/\\.mdx?$/, ''));
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  let fullPathMd = join(postsDirectory, `${slug}.md`);
  let fullPathMdx = join(postsDirectory, `${slug}.mdx`);
  let fullPath;

  if (fs.existsSync(fullPathMd)) {
    fullPath = fullPathMd;
  } else if (fs.existsSync(fullPathMdx)) {
    fullPath = fullPathMdx;
  } else {
    throw new Error(`Post file not found for slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  let post: PostType = {
    slug: slug,
    title: '',
    date: '',
    coverImage: '',
    excerpt: '',
    ogImage: { url: '' },
    content: '',
    tags: []
  };

  // Handle each field explicitly
  if (fields.includes('title') && typeof data['title'] === 'string') {
    post.title = data['title'];
  }
  if (fields.includes('date') && typeof data['date'] === 'string') {
    post.date = data['date'];
  }
  // Repeat for other fields like 'coverImage', 'excerpt', etc.

  // Special handling for complex fields
  if (fields.includes('content')) {
    post.content = content;
  }
  if (fields.includes('ogImage') && typeof data['ogImage'] === 'object') {
    post.ogImage = data['ogImage'];
  }
  if (fields.includes('tags') && Array.isArray(data['tags'])) {
    post.tags = data['tags'];
  }

  return post;
}

export function getAllPosts(fields: string[] = []): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
