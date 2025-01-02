"use client";

import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import { MdTextFields } from "react-icons/md";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
    type,

    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            label: "Text Field",
            helperText: "Helper text",
            required: false,
            placeHolder: "Value here...",
        },
    }),

    designerBtnElement: {
        icon: MdTextFields,
        label: "Text Field",
    },

    designerComponent: () => <div>Designer component</div>,
    formComponent: () => <div>Form component</div>,
    propertiesComponent: () => <div>Properties component</div>,

}