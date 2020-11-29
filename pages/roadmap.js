import Head from "next/head";
import Layout from "../components/layout";

export default function Roadmap() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Roadmap</title>
      </Head>
      <h2>RoadMap</h2>
      <div>
        <h3>Basic Requirements</h3>
        <div>
          <h4>Input page</h4>
          <ul>
            <li>Date picker</li>
            <li>text area</li>
            <li>Means to pick a visual theme (at least 3)</li>
            <li>a button to launch output page</li>
          </ul>
        </div>
        <div>
          <h4>Output page</h4>
          <ul>
            <li>
              Display the date and message and take the visual theme selected
            </li>
            <li>git information to allow us to review your code</li>
            <li>Button back to input page</li>
          </ul>
        </div>
        <div>
          <h4>Stretch Goals</h4>
          <ul>
            <li>Cool/funny home page. Try to turn this into an app.</li>
            <li>Roadmap page for progress and list of future features.</li>
            <li>Save output to PDF</li>
            <li>Send to email</li>
            <li>Share on social media</li>
            <li>
              Make output just like a real card with front and inside pages
            </li>
            <li>Animations for page transitions </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
