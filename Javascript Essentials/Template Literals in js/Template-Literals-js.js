//Literals 
    //Object Literals -->{}
    //Boolean Literals-->true/false
    //String Literals-->''or ""
    //Template Literals--> ` `

                                    //Template Literals

//instead of using escape sequence that makes the text/string code looks complex.

const message = 
'This is my\n' + 
'\'first\' message';
console.log(message);

//Template Literals are used to get required output on screen with a clean code.
const message1 =`This is my
'first' message`;
console.log(message1);

//can be used to write emails 
const email = 
`Hi John,

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(email);

//placeholder to pass values can be used in template literals
//Values that are dynamic and can be changed like varaible or expression or call-function

const name = 'John';
const Message = 'Hi ' + Name + ',\n';
console.log(Message);

const Message2 = 
`Hi ${Name} ${2 + 3},

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(Message2);