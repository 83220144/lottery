{
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  let regex3 = new RegExp(/xyz/ig, 'i');
  console.log(regex3.flags);
}

{
    function haha(){
        console.log('ahah');
    }
}
haha();
