import type { MetaFunction as Meta } from "@remix-run/node";
import { Post, getPosts } from "~/posts";

export const meta: Meta = () => [{ title: "Remix 🤝 MDX" }];

const posts = getPosts();

export default function Index() {
  return (
    <div className="flex-1 p-10 grid sm:grid-cols-2 gap-16 sm:place-items-center">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold">Remix 🤝 MDX</h2>
          <p className="text-gray-600 font-light">
            Vite plugins make it easy. Check out the code.
          </p>
        </div>
        <hr />
        <section>
          <h3 className="text-xl tracking-wide">✨ FEATURED ✨</h3>
          <ul className="mt-4 space-y-8">
            {posts
              .filter((post) => post.frontmatter.featured)
              .map((post) => (
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
