import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery'
// <img src="https://64.media.tumblr.com/a1652154605a76af1cf1709ce188ac51/1d1560b3b5129c23-d6/s1280x1920/90461abac1a2a010a53c939df3b449445ac695ca.png"/>

function App() {
  const images = [
    {
    src: 'https://64.media.tumblr.com/a1652154605a76af1cf1709ce188ac51/1d1560b3b5129c23-d6/s1280x1920/90461abac1a2a010a53c939df3b449445ac695ca.png',
    width: '360px', 
    height: '510px',
    col: 'col-1'
  },
  {
    src: 'https://64.media.tumblr.com/1d01f544a82556e44a4712385bda9263/tumblr_pv47prq6zn1ys1z3vo1_1280.png',
    width: '360px',
    height: '270px',
    col: 'col-1'
  },
  {
    src: 'https://64.media.tumblr.com/b4e2cd068b7571b5e72f68cb1a056b44/fe44d8a362ecff3b-61/s1280x1920/c430de366882ab98462332ea3910aa322223a19c.png',
    width: '360px',
    height: '203px',
    col: 'col-1'
  },
  {
    src: 'https://64.media.tumblr.com/b24924787a14238c6d94872c1909784c/e9d2a4f2a4911f63-d9/s1280x1920/ce363753c733d6c85d1f2771490b1e26ce21fcc7.png',
    width: '360px', 
    height: '284px',
    col: 'col-2'
  },
  {
    src: 'https://64.media.tumblr.com/69a910e0e180f7c2298c07132dee2528/e074c8a198eba081-69/s1280x1920/59a8948f3a9fd9f62f4e231a0be47a4a7934a44f.jpg',
    width: '360px',
    height: '219px',
    col: 'col-3'
  },
  {
    src: 'https://64.media.tumblr.com/c7f9433421e1d2f7f9860c5a9bf6f3bf/0c774c7303894d41-6c/s640x960/37bcb8ab804f011843f4491ffa44e55d366b52f1.gifv',
    width: '360px',
    height: '211px',
    col: 'col-2'
  },
  {
    src: 'https://64.media.tumblr.com/9ee9a84828798c8ff76b908e00cf3a7c/669d8fb2dfb649b2-bb/s1280x1920/ce6567d179b91565fcdaeb91247992a4afe7bea0.jpg',
    width: '360px',
    heigth: '357px',
    col: 'col-3'
  },
  {
    src: 'https://64.media.tumblr.com/602112b2886086c05a54eb070b96095d/f46bcd8a4a05bbfc-c3/s1280x1920/d0a7ea5eee9dc1acf05f5b88711752c24c28546b.jpg',
    width: '360px',
    height: '269px',
    col: 'col-2'
  },
  {
    src: 'https://64.media.tumblr.com/970b3bd2513206a11b6edfd2354d7622/cbabe076bfe02036-b5/s1280x1920/25e3c3933deda7374cd313f2ef2433fca269b78c.jpg',
    width: '360px',
    height: '239px',
    col: 'col-3'
  },
  {
    src: 'https://64.media.tumblr.com/35c818016dddb2664d379519add1f81a/tumblr_pul4xryLpQ1ys1z3vo1_1280.jpg',
    width: '360px',
    height: '224px',
    col: 'col-1'
  },
  {
    src: 'https://64.media.tumblr.com/e8ab8c75332e77a97f325f4942a8cd9a/tumblr_pun8oixRic1ys1z3vo1_1280.jpg',
    width: '360px',
    height: '642px',
    col: 'col-2'
  },
  {
    src: 'https://64.media.tumblr.com/f2657f32a0830642f3edea94b33ec8d6/tumblr_pun8bvFvBf1ys1z3vo1_1280.jpg',
    width: '360px',
    height: '336px',
    col: 'col-3'
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
      <Gallery images={images} />
    </div>
  );
}

export default App;
