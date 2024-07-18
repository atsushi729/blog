export default function Component() {
  return (
    <div className="p-10">
      {/* Title */}
      <h2 className="text-4xl font-bold">Atsushi Hatakeyama</h2>
      <p className="text-gray-600 font-light">
        Software engineer at{" "}
        <a href="https://www.tcs.com/jp-ja">Tata consultancy services</a>.
      </p>
      <p className="pt-5">I'm a full time software engineer.</p>
      {/* Social network links */}
      <h3 className="text-3xl font-bold pt-10">Links</h3>
      <ul className="pl-5 pt-5 space-y-3 text-gray-600 list-disc marker:text-cyan">
        <li>
          <a href="https://github.com">Github</a>
        </li>
        <li>
          <a href="https://linkedin.com">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <a href="https://medium.com">Medium</a>
        </li>
        <li>
          <a href="https://zenn.dev">Zenn</a>
        </li>
        <li>
          <a href="https://note.com">note</a>
        </li>
      </ul>
    </div>
  );
}
