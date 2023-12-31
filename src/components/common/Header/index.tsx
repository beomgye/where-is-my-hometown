const Header = ({ title, description, url, ogi }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale = 1.0, user-scalable=no"
      />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogi} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogi} />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </>
  );
};

Header.defaultProps = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_URL,
  ogi: process.env.NEXT_PUBLIC_OG_IMAGE
};

export default Header;
