import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Post } from "../components/Post";
import { getPosts } from "~/.server/posts";

export const loader = async () => {
  const posts = await getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};

export default function Index() {
  const featuredPosts = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 p-10 grid sm:grid-cols-2 gap-16 sm:place-items-center">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold">Welcome to my blog 😃</h2>
          <p className="text-gray-600 font-light dark:text-dark-sub">
            I&apos;m a Software engineer
          </p>
        </div>
        <hr />
        <section>
          <h3 className="text-xl tracking-wide">✨ FEATURED ✨</h3>
          <ul className="mt-4 space-y-8">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Post {...post} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="hidden sm:block">
        <img
          src="/hero.png"
          alt="Abstract sculpture with different colorful shapes"
        />
      </div>
    </div>
  );
}
