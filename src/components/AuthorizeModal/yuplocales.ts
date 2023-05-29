import {setLocale} from "yup";

export const yupRuLocale = () => {
    setLocale({
        mixed: {
            required: "Обязательное поле"
        }
    })
}