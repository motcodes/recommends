import React from 'react';

export function TabelOfContents({ data }) {
  const smoothScroll = (e, url) => {
    console.log('url :', url);
    e.preventDefault();
    document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    data && (
      <nav className="table-of-contents" aria-label="Table of contents">
        <h2 className="mb-2">Tabel of contents</h2>
        <ul className="ml-4">
          {data.map((heading) => (
            <li key={heading.url}>
              <a
                href={heading.url}
                onClick={(e) => smoothScroll(e, heading.url)}
                className="no-underline"
              >
                {heading.title}
              </a>
              {heading.items && (
                <ul className="ml-4 mt-2" style={{ listStyleType: 'circle' }}>
                  {heading.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        onClick={(e) => smoothScroll(e, item.url)}
                        className="no-underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}
