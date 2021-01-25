let headingsRaw = ['H1 All About Birds', 'H2 Kinds of Birds', 'H3 The Finch', 'H3 The Swan', 'H2 Habitats', 'H3 Wetlands']

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
    console.log(headingsNested)
}
headingsNester(headingsRaw)