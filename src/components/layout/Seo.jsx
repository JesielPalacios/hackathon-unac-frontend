import { Helmet } from "react-helmet";

export const Seo = ({ title, subtitle }) => {
  return (
    <Helmet>
      {title && <title>{title} | SVGA🔥</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
  );
};
