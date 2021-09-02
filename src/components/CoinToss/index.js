import {Component} from 'react'
import './index.css'

const CoinHeadImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const CoinTailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: CoinHeadImg,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossButton = () => {
    const {headsCount, tailsCount} = this.state

    const randomToss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (randomToss === 0) {
      latestHeadCount += 1
      tossImage = CoinHeadImg
    } else {
      tossImage = CoinTailImg
      latestTailCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return totalCount
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalTosses()
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          <img src={tossResultImage} alt="toss result" className="image" />

          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>

          <div className="counts">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
