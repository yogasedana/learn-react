import logo from './logo.svg';
import './App.css';

// sifat fucntion ini reusable bisa dipanggil dimana pun
function Salam() {
  return <h1>Salam Yoga</h1>
}

// membuat function untuk menangkap properti yg dikirim dari function App
function Bio(props) {
  return <span> Umur {props.umur}</span>
}

// function yang berisi properti yang di pasing dari function bio
function Panggilan(props) {
  // cara memanggilanya menggunakan <namaFunction param={props.namaParam} />
  return <h1>Nama {props.name} - <Bio umur={props.umur} /></h1>
}

// function yang berisi properti 
function Sapaan(props) {
  return <h1>Nama {props.name} - {props.umur}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Salam />
        {/* yang dimasukan di panggilan itu adalah parameternya */}
        <Sapaan name="Yoga" umur="23"/>
        {/* data ini di pasing ke function bio */}
        <Panggilan name="Putri" umur="23"/>
      </header>
    </div>
  );
}
export default App;
