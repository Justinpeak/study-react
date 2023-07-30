import { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css'

export default class App extends Component {
  state = {}
  componentDidMount() {
    new Swiper('.swiper', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  }
  render() {
    return (
      <div className="swiper" style={{ width: '600px', height: '400px', border: '1px solid #333', background: 'aqua' }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
      </div>
    )
  }
}
