module.exports = {
  
  template: "https://www.instagram.com/p/{pointer}/?__a=1",
  pattern: /(https:\/\/)(www.instagram.com\/p\/)([^\/]*)(\/.*)/,

  fnc: (template, pattern, url) => {
    // console.log(url)

    const instagramPostPointer = url.match(pattern)[3]

    // console.log(instagramPostPointer)
    // console.log(template)

    return template.replace('{pointer}',
      instagramPostPointer === []
        ? new Error('Instagram link has no appropriate structure.')
        : instagramPostPointer
    )
  }
}