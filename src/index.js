import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// pemanggilan sederhana ReactDOM
// membuat variabel nama const nama
const nama = "Gde Yoga Hary Sedana";
// membuat variabel element yang didalmnya memanggil variabel nama dengan kurung {}
const element = <h1>Hallo, Nama saya {nama} </h1>;
// ReactDOM.render untuk mengerim element yang sudah dibuat, file dikirim menggunakan id
ReactDOM.render(element, document.getElementById('salam'));

// bisa munggunakan fungsi biasa
function salam(){
  // yang diisi dengan variabel nama const nama diatas
  return "Hallo " + nama;
}
// sipanggil menggunakan variabel elements karna variabel element sudah di pakai di atas
const elements = <h1>{salam(nama)}</h1>
// lalau kirim ke html.index menggunakan id
ReactDOM.render(elements, document.getElementById('halo'));
reportWebVitals();
