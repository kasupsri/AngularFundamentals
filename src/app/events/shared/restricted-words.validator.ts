
import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms"

export function restrictedWords(words:any[]):ValidatorFn {
    return (control:AbstractControl): { [key:string]:any } =>
     {
         if(!words) return {}

         const invalidWords = words
                             .map(w => control.value.includes(w) ? w : null)
                             .filter(w => w != null)
         
         return invalidWords &&  invalidWords.length > 0 
         ? {'restrictedWords': invalidWords.join(', ')} 
         : {}    
     }
 }