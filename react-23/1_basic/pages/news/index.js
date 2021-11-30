// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/hit'>
            hit
          </Link>
        </li>
        <li>Hit2</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;