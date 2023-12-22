// Test funzionamento

console.log('Template html css js')

const { createApp } = Vue;

createApp({
    data() {
        return {
            text: 'BUON NATALE!',
        }
    },
}).mount('body');