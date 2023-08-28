import { FormControl } from "@angular/forms";

export interface ContactRequestForm {
    email: FormControl<string>;
    message: FormControl<string>;
}

export interface ContactRequest {
    email: string;
    message: string;
}