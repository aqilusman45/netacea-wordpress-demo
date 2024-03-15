import clsx from "clsx";
import {
  sanitize,
  processPost,
  processPostExcerpt,
  parseHtmlWithLink,
} from "../../utils/misellaneous";
import styles from "./RichText.module.scss";

export default function HtmlBlock({
  content,
  className,
  sanitizePost,
  sanitizeBulletin,
  sanitizePostExcerpt,
  ...rest
}) {
  const externalLinksRegex = new RegExp(
    `<a\s+href="https:\/\/(?!${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}(?!\/news\/[^/]+\/$))`,
    "gi"
  );
  const str = content?.replace(
    externalLinksRegex,
    '<a target="_blank" rel="noopener" href="https://'
  );

  const html = sanitizePost
    ? processPost(str)
    : sanitizePostExcerpt
    ? processPostExcerpt(str)
    : sanitize(str);
  const elements = parseHtmlWithLink(html);

  return (
    <div className={clsx(styles.htmlBlock, className)} {...rest}>
      {elements}
    </div>
  );
}
