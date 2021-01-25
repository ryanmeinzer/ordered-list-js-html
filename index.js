// creating div to hold ordered list
const div = document.getElementById('orderedList')

let headingsRaw = ['H1 All About Birds', 'H2 Kinds of Birds', 'H3 The Finch', 'H3 The Swan', 'H2 Habitats', 'H3 Wetlands']

// declare variable for nested headings array
let headings = headingsNester(headingsRaw)

// call function to render DOM into div with headings
toOutline(div, headings)

// transform raw headings array into nested heading array
function headingsNester(headingsRaw) {
    let headingsNested = []
    for (let i = 0; i < headingsRaw.length; i++) {
        if (headingsRaw[i].charAt(1) == 1) {
            headingsNested.push(headingsRaw[i])
        }
        if (headingsRaw[i].charAt(1) == 2) {
            let tempArray = []
            tempArray.push(headingsRaw[i])
            headingsNested.push(tempArray)
        }
        if (headingsRaw[i].charAt(1) == 3) {
            if (headingsRaw[i - 1].charAt(1) == 3) {
                headingsNested[headingsNested.length - 1][headingsNested[headingsNested.length - 1].length - 1].push(headingsRaw[i])
            } else {
                let tempArray = []
                tempArray.push(headingsRaw[i])
                headingsNested[headingsNested.length - 1].push(tempArray)
            }
        }
    }
    return headingsNested
}

// transforming nested headings array into ordered list
function toOutline(root, headings) {
    // create ordered list
    let ol = document.createElement('ol')
    // instantiate list
    let li
    // make root the ordered list
    root.appendChild(ol)
    // for each heading
    headings.forEach(function (item) {
        // if it's an array  (ie a list)
        if (Array.isArray(item)) {
            // add items to it's list
            toOutline(li, item)
            // return
            return
        }
        // create list for DOM
        li = document.createElement('li')
        // add children items to respective lists
        li.appendChild(document.createTextNode(item))
        // add all to ordered list
        ol.appendChild(li)
    })
}
