import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons d">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright c">
        <li>&copy;Umair Zaki</li>
        <li>
          03132873668
        </li>
      </ul>
    </footer>
  );
}
