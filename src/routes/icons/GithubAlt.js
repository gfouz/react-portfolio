import { createElement } from 'react';

export function SvgGithubAlt(props) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      length: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M5.688 5S5 6.207 5 8.25c0 1.355.309 2.07.531 2.438C3.97 12.312 3 14.515 3 17.343 3 24.586 7.59 27 16 27s13-2.414 13-9.656c0-2.926-.914-5.125-2.406-6.719A7.833 7.833 0 0026.344 5c-3.102 0-5.688 2.383-5.782 2.469A21.466 21.466 0 0016 7c-1.605 0-3.18.195-4.656.563C9.266 5.502 6.758 5 5.688 5zm15 10.438c.843-.008 1.625.062 2.312.28 1.832.583 3 2.266 3 4.157C26 25.109 23.191 26 16 26c-5.344 0-9.688-.941-9.688-5.938 0-1.906 1.036-2.984 1.782-3.656 1.64-1.476 4.23-.75 7.906-.75 1.672 0 3.277-.203 4.688-.219zM10.5 18c-.828 0-1.5.895-1.5 2s.672 2 1.5 2 1.5-.895 1.5-2-.672-2-1.5-2zm11 0c-.828 0-1.5.895-1.5 2s.672 2 1.5 2 1.5-.895 1.5-2-.672-2-1.5-2zm-11.156.844c.234 0 .406.199.406.437 0 .239-.172.438-.406.438a.444.444 0 01-.438-.438c0-.238.203-.437.438-.437zm11 0c.234 0 .406.199.406.437 0 .239-.172.438-.406.438a.444.444 0 01-.438-.438c0-.238.203-.437.438-.437z',
    }),
  );
}
export default SvgGithubAlt;
