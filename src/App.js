import logo from './logo.svg';
import './App.css';
import Stream from './components/Stream'

function App() {
  const images = [
    {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/LSAD.png',
    width: '360px', 
    height: '510px',
    col: 'col-1',
    caption: 'DIGITAL_COMMONS @ Limerick School of Art & Design'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/DIGITAL_IMMIGRANT.png',
    width: '360px',
    height: '203px',
    col: 'col-1',
    caption: 'DIGITAL_COMMONS // workshop_01'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/JITTERS.png',
    width: '360px',
    height: '270px',
    col: 'col-1',
    caption: 'QUEER_DIASPORA // Direct Provision Thesaurus'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/if_statement.png',
    width: '360px', 
    height: '284px',
    col: 'col-2',
    caption: 'DIGITAL_COMMONS // if(commons == false){return null;}'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/DIGITAL_COMMONS.jpg',
    width: '360px',
    height: '219px',
    col: 'col-3',
    caption: 'DIGITAL_COMMONS // if commons == false{ return null; }'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/DIGITAL_COMMONS-RAW.gif',
    width: '360px',
    height: '211px',
    col: 'col-2',
    caption: 'DIGITAL_COMMONS // if i belong to everyone, i am not an evil'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/DP_THESAURUS.png',
    width: '360px',
    height: '357px',
    col: 'col-3',
    caption: 'QUEER_DIASPORA // Thesaurus of Direct Provision'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/TUR_BANISM_05.jpg',
    width: '360px',
    height: '239px',
    col: 'col-2',
    caption: 'TUR_BANISM // reconstructing_05'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/WIDE_SHUT_05.jpg',
    width: '360px',
    height: '239px',
    col: 'col-3',
    caption: 'WIDE_SHUT // looking further _05'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/TUR_BANISM_03.jpg',
    width: '1155px',
    height: '718px',
    col: 'col-1',
    caption: 'TUR_BANISM // reconstructing_03'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/EFIL_01.jpg',
    width: '1079px',
    height: '1920px',
    col: 'col-2',
    caption: 'EFIL_01 // 😵'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/EFIL_02.jpg',
    width: '360px',
    height: '336px',
    col: 'col-3',
    caption: 'EFIL_02 // 🎁'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/WIDE_SHUT_02.jpg',
    width: '1000px',
    height: '593px',
    caption: 'WIDE_SHUT // looking further _02',
    col: 'col-1'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/EFIL_01.1.jpg',
    width: '423px',
    height: '462px',
    caption: 'EFIL_01 // 😵',
    col: 'col-3'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/DIGITAL_FRAGMENTS_01.jpg',
    width: '1102px',
    height: '936px',
    caption: 'DIGITAL_FRAGMENTS // 01',
    col: 'col-2'
  },
  {
    src: 'https://s3-eu-west-1.amazonaws.com/johnmalc.xyz/stream/EFIL_03.jpg',
    width: '1280px',
    height: '1707px',
    caption: 'EFIL_03 // ⚡️',
    col: 'col-1'
  }
  ]
  return (
    <div className="App">
      <aside class="sidebar">
        <h1>John Malcolm Anderson</h1>
        <ul>
        <li><a href="">TUR_BANISM</a></li>
        <li><a href="">WIDE_SHUT</a></li>
        <li><a href="">EFIL_CRAFT</a></li>
        <li><a href="">DIGITAL_COMMONS</a></li>
        <li><a href="">QUEER_DIASPORA</a></li>
        <li><a href="">WEB_DEV</a></li>
    </ul> 
      </aside>
      <Stream images={images}/>
    </div>
  );
}

export default App;
