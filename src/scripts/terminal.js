const outputToTerminal = () => {
  const message = `
    <p>This is just a landing page.</p>
    <p><strong>No, really.</strong>
    All the good stuff is squirreled away in projects.
    Some of it's still in my head, yet to be realized.</p>
    <p>I code stuff. Mostly backend stuff you'll never notice.</p>
    <p><strong>I like</strong></p>
    <ul>
      <li>Beautiful code</li>
      <li>Writing complex code simply</li>
      <li>Solving problems</li>
      <li>Learning</li>
    </ul>
    <p>This really is just a landing page,
    if you want to look me up around the net
      you can find me (as P1xt) on
      <a href='https://twitter.com/P1xt' target='_blank'>Twitter</a>,
      <a href='https://github.com/P1xt' target='_blank'>GitHub</a> and
      <a href='https://twitter.com/P1xt' target='_blank'>Medium</a>.</p>
    <br>
    <p>Have a great day - go code something cool :D</p>
  `;
  let i = 0;
  const t = setInterval(() => {
    const char = message.charAt(i);
    if (char === '<') {
      i = message.indexOf('>', i);
    }
    document.getElementById('terminal').innerHTML = message.substr(0, i++);
    if (i === message.length) {
      clearInterval(t);
    }
  }, 45);
};

window.onload = () => {
  outputToTerminal();
};
