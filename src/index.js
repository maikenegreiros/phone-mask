export default function(input) {
    input.addEventListener("keyup", () => {
        input.value = input.value.replace(/\D/gi, "");
        input.value = input.value.replace(/(^\d{2})(\d)/, "($1) $2");
        input.value = input.value.replace(/(\d)(\d{4})$/, "$1-$2");
    });
}
