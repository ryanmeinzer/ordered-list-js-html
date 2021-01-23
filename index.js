// // creating div to hold ordered list
// const div = document.getElementById('orderedList')

// // starting with brute force nested array
// let headings = ['H1 All About Birds', ['H2 Kinds of Birds', ['H3 The Finch', 'H3 The Swan']], ['H2 Habitats', ['H3 Wetlands']]]

let headingsNested = ['H1 All About Birds', ['H2 Kinds of Birds', ['H3 The Finch', 'H3 The Swan']], ['H2 Habitats', ['H3 Wetlands']]]

let headingsRaw = ['H1 All About Birds', 'H2 Kinds of Birds', 'H3 The Finch', 'H3 The Swan', 'H2 Habitats', 'H3 Wetlands']

function headingsNester(headingsRaw) {
    let h1Array = []
    let h2Array = []
    let h3Array = []

    for (let heading of headingsRaw) {
        if (heading.charAt(1) == 1) {
            h1Array.push(heading)
            // console.log(h1Array)
        }
        if (heading.charAt(1) == 2) {
            h2Array.push(heading)
            // console.log(h2Array)
        }
        if (heading.charAt(1) == 3) {
            h3Array.push(heading)
            // console.log(h3Array)
        }
    }
    // console.log(h1Array)
    // console.log(h2Array)
    // console.log(h3Array)
}
headingsNester(headingsRaw)






// // transforming array into ordered list
// function toOutline(root, headings) {
//     // create ordered list
//     let ol = document.createElement('ol')
//     // instantiate list
//     let li
//     // make root the ordered list
//     root.appendChild(ol)
//     // for each heading
//     headings.forEach(function (item) {
//         // if it's an array  (ie a list)
//         if (Array.isArray(item)) {
//             // add items to it's list
//             toOutline(li, item)
//             // return
//             return
//         }
//         // create list for DOM
//         li = document.createElement('li')
//         // add children items to respective lists
//         li.appendChild(document.createTextNode(item))
//         // add all to ordered list
//         ol.appendChild(li)
//     })
// }
// // call function to render DOM into div with headings
// toOutline(div, headings)