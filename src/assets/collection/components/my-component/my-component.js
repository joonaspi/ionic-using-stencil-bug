export class MyComponent {
    render() {
        return [
            h("ion-item", null,
                h("ion-label", { position: 'floating' }, "Some example only once"),
                h("ion-input", { value: "default value", required: true }))
        ];
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return "/**style-placeholder:my-component:**/"; }
}
