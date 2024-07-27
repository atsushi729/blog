export default function Component() {
  return (
    <div className="p-10">
      {/* Title */}
      <h2 className="text-4xl font-bold">Atsushi Hatakeyama</h2>
      <p className="text-gray-600 font-light dark:text-dark-sub">
        Software engineer at{" "}
        <a href="https://www.tcs.com/jp-ja">Tata consultancy services</a>.
      </p>
      <p className="pt-5">I'm a full time software engineer.</p>
      {/* Social network links */}
      <h3 className="text-3xl font-bold pt-10">Links</h3>
      <ul className="pl-5 pt-5 space-y-3 text-gray-600 list-disc marker:text-cyan dark:text-dark-sub">
        <li>
          <a href="https://github.com/atsushi729">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/atsushi-hatakeyama/">LinkedIn</a>
        </li>
        <li>
          <a href="https://x.com/Hatakey2Atsushi">Twitter</a>
        </li>
        <li>
          <a href="https://medium.com/@dtianshan7">Medium</a>
        </li>
        <li>
          <a href="https://zenn.dev/atusi">Zenn</a>
        </li>
        <li>
          <a href="https://note.com/beyond_mars">note</a>
        </li>
      </ul>
    </div>
  );
}
