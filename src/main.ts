import Application from "./app";
import { isTranslatable } from "./utils";

const application = new Application();
application.initialize();

const getTargetWord = (value: string, caretPosition: number) => {
    if (value.length === 0) {
        return {
            target: '',
            caretStart: 0
        };
    }

    let target = '';

    while (caretPosition > 0 && isTranslatable(value.charAt(caretPosition - 1))) {
        caretPosition--;
        target += value.charAt(caretPosition);
    }

    return {
        caretStart: caretPosition,
        target: target.split('').reverse().join('')
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("sada-khata-editor") as HTMLTextAreaElement;
    editor.focus();

    editor.addEventListener("keydown", function (event) {
        let value = (event.target as HTMLTextAreaElement).value || "";

        if (["Space", "Enter", "Tab"].includes(event.code)) {
            const { target, caretStart } = getTargetWord(value, this.selectionStart);
            console.log(target.length);

            value = value.substring(0, caretStart) + value.substring(caretStart + target.length);
            const left = value.substring(0, caretStart);
            const right = value.substring(caretStart);
            const translated = application.translate(target);
            // console.log({ target, translated });


            this.value = left + translated + right;

            this.setSelectionRange(caretStart + translated.length, caretStart + translated.length);

            if (event.key === 'Tab') {
                event.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;

                this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + 1;
            }
        }

    });
});
