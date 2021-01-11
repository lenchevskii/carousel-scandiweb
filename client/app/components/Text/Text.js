import React                            from 'react'
import styles                           from './text.scss'

export default function Text({ src }) {
  return (
    <div className={styles.content}>
      <section className={styles.text} tabIndex='-1'>
        <h3>Lorem</h3>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id varius tortor. Donec viverra magna quam, eu elementum tellus ultrices et. Duis ullamcorper venenatis diam, sed vehicula justo egestas non. Duis consectetur metus at nunc fringilla faucibus. Nullam ornare quis quam in interdum. Praesent eu ultrices magna, vel varius erat. In libero lectus, fermentum ac mollis sit amet, posuere sit amet enim. Donec ullamcorper eros sit amet quam laoreet, ut malesuada elit vehicula. Donec at malesuada lectus. Suspendisse lacinia nisi non lectus molestie rutrum. Nulla id fringilla orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris quam, tristique sit amet dictum in, consectetur in quam. Pellentesque placerat, mauris quis volutpat dapibus, nisl orci condimentum nibh, et lobortis lectus quam non diam.</p>

        <p>Aliquam a faucibus nunc. Nam semper urna ultricies leo aliquet luctus. Ut vehicula libero vitae ante dignissim tristique. Aenean bibendum, elit interdum aliquet gravida, lectus ex pellentesque nulla, quis feugiat nisl sem id lectus. Ut id turpis leo. Aenean egestas condimentum turpis quis lobortis. Mauris id mattis eros, eget faucibus urna. Vivamus augue lectus, eleifend quis suscipit maximus, facilisis ac ipsum. Mauris neque tortor, maximus et nulla tempus, suscipit porttitor tellus. Etiam suscipit dapibus orci sed auctor.</p>

        <p>Sed sit amet viverra ligula, eget dignissim magna. Sed ut metus eu odio viverra venenatis vitae et orci. Ut vel lorem feugiat, facilisis ipsum nec, rutrum ex. Morbi egestas pharetra dapibus. Donec lobortis, est faucibus interdum venenatis, arcu nibh condimentum mauris, vel tincidunt diam mauris congue nisi. Sed hendrerit ut dui eu mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales ut risus ac eleifend. Maecenas condimentum imperdiet dui ut malesuada. Fusce vitae nulla tincidunt, finibus ipsum quis, mattis diam. Donec risus dui, eleifend vel maximus vel, tempus nec libero. Suspendisse consectetur fringilla mi non accumsan. Duis tempus ut libero id vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla in magna id risus pretium fringilla elementum non lectus. Praesent quis tristique risus, sit amet sagittis tortor.</p>

        <p>Morbi eu porta augue. Morbi mattis eget ex a consequat. Quisque euismod laoreet tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vulputate, urna ut vehicula faucibus, sapien erat condimentum turpis, eget luctus velit massa sed odio. Morbi auctor lobortis dolor quis condimentum. Maecenas non dolor magna. Ut ac odio elementum, feugiat felis non, varius lectus. Etiam commodo quam odio, in bibendum velit tempor vitae. Phasellus ut mi eu tortor facilisis tempus id nec eros. Nunc semper consequat dolor non viverra. Proin dignissim tincidunt est non consectetur. Suspendisse vitae rutrum libero.</p>
      </section>
    </div>
  )
}