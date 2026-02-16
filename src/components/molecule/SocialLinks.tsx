import { SOCIAL_LINKS, type SocialLink } from "@/data/site";

type SocialLinksProps = {
  links?: readonly SocialLink[];
  listClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
};

function cx(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export default function SocialLinks({
  links = SOCIAL_LINKS,
  listClassName,
  linkClassName,
  iconClassName,
}: SocialLinksProps) {
  return (
    <ul className={listClassName}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.target}
              rel={link.rel}
              aria-label={link.label}
              className={cx(
                "flex items-center justify-center rounded-sm text-accent-muted hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent-muted",
                linkClassName,
              )}
            >
              <Icon
                className={cx(
                  "h-5 w-5 md:h-6 md:w-6",
                  iconClassName,
                  link.iconClassName,
                )}
                aria-hidden="true"
                focusable="false"
              />
              <span className="sr-only">{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
