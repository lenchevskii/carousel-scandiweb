module.exports = {
  
  template: "https://www.instagram.com/p/{pointer}/?__a=1",
  pattern: /(https:\/\/www.instagram.com\/p\/)([^\/.]*)(\/?.*)/,

  fnc: (template, pattern, url) => {
    const postPointer = url.match(pattern)[2]

    return template.replace('{pointer}',
      postPointer === []
        ? new Error('Instagram link has no appropriate structure.')
        : postPointer
    )
  }
}