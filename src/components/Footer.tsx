interface Props {
  navigate: (r: string) => void;
}

export default function Footer({ navigate }: Props) {
  return (
    <footer className="border-t border-(--line) mt-35 pt-15 grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 items-start max-[720px]:grid-cols-[1fr_1fr] max-[480px]:grid-cols-1">
      <div className="footer-mega tracking-[-0.04em] leading-[0.95] font-medium">
        Let's build
        <br />
        <span className="text-(--accent) italic font-normal">something</span>
        <br />
        well-made.
      </div>
      <div className="footer-col flex flex-col">
        <h5 className="text-[11px] uppercase tracking-[0.16em] mb-3">Pages</h5>
        {(["home", "projects", "about"] as const).map((id) => (
          <a
            key={id}
            href={`/${id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(id);
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
      <div className="footer-col flex flex-col">
        <h5 className="text-[11px] uppercase tracking-[0.16em] mb-3">
          Elsewhere
        </h5>
        <a
          href="https://github.com/Ali7U"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
        <a
          href="https://linkedin.com/in/alialguadeb"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn →
        </a>
      </div>
      <div className="footer-col flex flex-col">
        <h5 className="text-[11px] uppercase tracking-[0.16em] mb-3">
          Contact
        </h5>
        <a href="mailto:alguadeb@gmail.com">alguadeb@gmail.com</a>
        <div
          className="mt-4 text-[11px] leading-[1.6]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--fg-mute)" }}
        >
          © 2026 Ali AlGuadeb
        </div>
      </div>
    </footer>
  );
}
