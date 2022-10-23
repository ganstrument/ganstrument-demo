{
    class AudioPlayer extends HTMLElement{
        constructor(){
            super();

            this.attachShadow({mode: 'open'});
        }


        test(){
            return(
                <div>aaa</div>
            )

        }

        render(){
            this.shadowRoot.innerHTML = test()
        }
    }

    customElements.define('ganstrument-player',AudioPlayer)
}