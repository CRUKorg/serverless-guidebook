import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Concepts",
    imageUrl: "img/concepts.png",
    description: (
      <>
        Learn about the fundamental serverless concepts. A great place to start!
      </>
    ),
  },
  {
    title: "Services",
    imageUrl: "img/services.png",
    description: (
      <>Explore the AWS services at the core of most serverless applications.</>
    ),
  },
  {
    title: "Resources",
    imageUrl: "img/resources.png",
    description: (
      <>
        Discover reference architectures, best practices and templates to start
        building.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Let the Serverless Guidebook navigate your serverless journey"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <div class="sg-container">
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>
            <span class="sg-hover-region"></span>

            <svg
              class="sg-logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
            >
              <path d="M775.9,391.9c-3.6-6.3-10.4-10.1-17.6-10.1H544.2L693.9,38.5c2.8-6.3,2.1-13.6-1.6-19.3c-3.8-5.8-10.2-9.2-17-9.2H437.4c-8.6,0-16.3,5.4-19.2,13.6L222.5,577.7c-2.2,6.2-1.2,13.1,2.6,18.5c3.8,5.4,10,8.6,16.6,8.6h230.5L360.1,963.6c-1.9,6.2-0.8,12.9,3,18.1c3.8,5.2,9.9,8.3,16.4,8.3H435c7.3,0,14.1-3.9,17.7-10.3L776,412.3C779.6,406,779.5,398.2,775.9,391.9z" />
            </svg>

            <div class="sg-text-wrapper">
              <h1 class="sg-text">
                serverless
                <br />
                guidebook
              </h1>
            </div>
          </div>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
