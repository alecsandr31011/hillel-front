function wrapTags(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

var res = wrapTags('Hello world', 'p');

console.log(res);
