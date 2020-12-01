import Head from "next/head";
import Layout from "../components/layout";
import Heading from "../components/heading";

export default function Roadmap() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Roadmap</title>
      </Head>
      <article className="mt-14">
        <Heading text="RoadMap" />
        <div className="max-w-2xl mx-auto">
          <h3>Basic Requirements</h3>
          <div className="flex justify-between">
            <div className="w-1/2 p-4">
              <h4 className="mb-4 text-lg underline">Input page</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li className="line-through list-disc">Date picker</li>
                <li className="line-through list-disc">text area</li>
                <li className="line-through list-disc">
                  Means to pick a visual theme (at least 3)
                </li>
                <li className="line-through list-disc">
                  a button to launch output page
                </li>
              </ul>
            </div>
            <div className="w-1/2 p-4">
              <h4 className="mb-4 text-lg underline">Output page</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li className="line-through list-disc">
                  Display the date and message and take the visual theme
                  selected
                </li>
                <li className="line-through list-disc">
                  git information to allow us to review your code
                </li>
                <li className="line-through list-disc">
                  Button back to input page
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 p-4">
              <h4 className="mb-4 text-lg underline">Stretch Goals</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li className="line-through list-disc">
                  95+ LightHouse Speed Scores
                </li>
                <li className="line-through list-disc">
                  Cool/funny home page. Try to turn this into an app.
                </li>
                <li className="list-disc ">
                  Roadmap page for progress and list of future features.
                </li>
                <li className="list-disc ">Save output to PDF</li>
                <li className="list-disc ">Send to email</li>
                <li className="list-disc ">Share on social media</li>
                <li className="list-disc ">
                  Make output just like a real card with front and inside pages
                </li>
                <li className="list-disc ">Animations for page transitions </li>
              </ul>
            </div>
            <div className="w-1/2 p-4">
              <h4 className="mb-4 text-lg underline">Things to do</h4>
              <ul className="grid grid-cols-1 gap-2">
                <li className="list-disc ">
                  Make roadmap route responsive more responsive
                </li>
                <li className="list-disc ">
                  Make project wide button/link component and learn about A11y
                  implications of Nextjs link/route implementation.
                </li>
                <li className="list-disc ">Better Github readme</li>
                <li className="list-disc ">Add more borders.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
