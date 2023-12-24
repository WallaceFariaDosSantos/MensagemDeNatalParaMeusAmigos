class Botoes {
    constructor() {
        this.startButton1 = createButton('iniciar');
    }


    buttonPosition(){
        this.startButton1.position(windowWidth/2-175, windowHeight/2+200);
    }

    buttonStyle(){
        this.startButton1.class("customButton1");
    }

    buttonHide(){
        this.startButton1.hide();
    }

    buttonShow(){
        this.startButton1.show();
    }

    handleMousePressed() {
        this.startButton1.mousePressed(() => {
            state = 0;
        });
    }

    display(){
        this.buttonPosition();
        this.buttonStyle();
        this.handleMousePressed(); 
        if(state === -1){
            this.buttonShow();
        }
        else{
            this.buttonHide();
        }
    }
}

