export class MainCard extends HTMLElement{

    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
    }

    render(){

        const imagen = this.getAttribute("img")
        const titulo = this.getAttribute("titulo")
        const descripcion = this.getAttribute("descripcion")

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    background-color: #1e293b;
                    border-radius: 10px;
                    width: 290px;
                    height: 230px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                div{
                    padding: px;
                    position: absolute;
                    top:20px;
                    background-color: #3e5683;
                    width: 50px;
                    height: 50px;
                    border-radius: 99999px;
                    display:flex;
                    align-items: center;
                    justify-content: center
                }
                img{
                    top: 10px;
                    height: 20px;
                    width: 20px;
                }

                h3{
                    margin: 0;
                    margin-top: 70px;

                }
            </style>
            <div>
                <img src="${imagen}"/>
            </div>
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        `
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("main-card",MainCard)