// Test funzionamento

console.log('Template html css js')

const { createApp } = Vue;
const imgCat = 'https://www.idlememe.com/wp-content/uploads/2021/12/merry-christmas-meme-idlememe-6.jpg'
const imgTree = 'https://png.pngtree.com/png-clipart/20201208/original/pngtree-sparkling-christmas-tree-merry-png-image_5605495.jpg'

createApp({
    data() {
        return {
            text: 'BUON NATALE!',
            imgCat: imgCat,
            imgTree: imgTree,
            classes: 'rounded-5',
            bg: 'bg-danger text-center py-3',
        }
    },
}).mount('body');