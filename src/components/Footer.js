import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

const Footer = (props) => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <h3 className="footer-title">
              {props.data.site.siteMetadata.title}
            </h3>
            <ul className="footer-menu">
              <li>
                <a href="https://www.iteratec.de/impressum/">Imprint</a>
              </li>
              <li>
                <a href="https://www.iteratec.com/data-protection/">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="https://www.flaticon.com/">Icons</a>
              </li>
              <li className="copyright">
                <a href="https://www.iteratec.de">
                  © {new Date().getFullYear()}{' '}
                  {props.data.site.siteMetadata.company}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            company
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
);
