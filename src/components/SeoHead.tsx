import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  canonical: string;
};

export default function SeoHead({ title, description, canonical }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (selector: string, attr: "name" | "property", value: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`${selector}`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const ensureLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    ensureMeta('meta[name="description"]', "name", "description", description);
    ensureMeta('meta[property="og:title"]', "property", "og:title", title);
    ensureMeta('meta[property="og:description"]', "property", "og:description", description);
    ensureMeta('meta[property="og:url"]', "property", "og:url", canonical);
    ensureMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    ensureLink("canonical", canonical);
  }, [title, description, canonical]);

  return null;
}
