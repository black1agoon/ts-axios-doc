class Handler {
    constructor() {
        this.onClickBad = (e) => {
            this.type = e.type;
        };
    }
}
let h = new Handler();
let uiElement = {
    addClickListener() {
    }
};
uiElement.addClickListener(h.onClickBad);
