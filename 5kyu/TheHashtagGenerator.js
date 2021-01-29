// https://www.codewars.com/kata/52449b062fb80683ec000024
import { assertEquals } from '../testing.js';

function generateHashtag(str) {
  return str.match(/\w/g) && str.camelCase().length < 140
    ? '#' + str.camelCase()
    : false;
}

String.prototype.camelCase = function () {
  const text = this.valueOf(0);
  var words = text.split(' ');
  var res = '';
  words = words.filter((str) => {
    return /\S/.test(str);
  });
  if (text == '') {
    return '';
  }
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    res += words[i];
  }
  return res;
};

Deno.test('THG', () => {
  assertEquals(generateHashtag(''), false);
  assertEquals(generateHashtag(' '.repeat(200)), false);
  assertEquals(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
  assertEquals(generateHashtag('Codewars'), '#Codewars');
  assertEquals(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
  assertEquals(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
  assertEquals(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
  assertEquals(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138));
  assertEquals(generateHashtag('a'.repeat(140)), false);
  assertEquals(generateHashtag('L' + 'o'.repeat(140) + 'ng Cat'), false);
});
