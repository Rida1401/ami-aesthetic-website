import BlogSection from "../components/BlogSection";
import SEO from "../components/SEO";

function InsightsPage() {
  return (
    <>
      <SEO 
        title="Insights"
        description="Stay informed with the latest in aesthetic technology, clinical best practices, and industry trends from AMI Aesthetic."
      />
      <BlogSection />
    </>
  );
}

export default InsightsPage;