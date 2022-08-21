import { Helmet } from "react-helmet";

export const Seo = ({ title, subtitle }) => {
  return (
    <Helmet>
      {title && <title>{title} | Hackathon🔥 - UNAC</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
  );
};
