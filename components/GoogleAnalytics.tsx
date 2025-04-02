import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-QZQ23Z8EC6"
      />

      <Script id="GoogleAnalytics" strategy="lazyOnload">
        {`
            var host = window.location.hostname;
            if (host !== "localhost") {
        
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
        
            gtag('config', 'G-QZQ23Z8EC6');
          }
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
