class NamaDanNIM extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Example data – you can make this dynamic if needed
    const nama = this.getAttribute("nama") || "SATYA WIRA PRAMUDITA";
    const nim = this.getAttribute("nim") || "24/543649/PA/23102";

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          background-color: #787878ff;
          border: 1px solid #6f2727ff;
          border-radius: 12px;
          padding: 12px 18px;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
          width: 90%;
          max-width: 350px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2 {
          margin: 0;
          font-size: 1.2rem;
          color: #000000ff;
        }
        p {
          margin: 6px 0 0;
          font-size: 0.95rem;
          color: #000000ff;
        }
      </style>
      <div class="container">
        <h2>${nama}</h2>
        <p><strong>NIM:</strong> ${nim}</p>
      </div>
    `;
  }
}

customElements.define("nama-dan-nim", NamaDanNIM);
