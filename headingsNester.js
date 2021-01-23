let headingsRaw = ['H1 All About Birds', 'H2 Kinds of Birds', 'H3 The Finch', 'H3 The Swan', 'H2 Habitats', 'H3 Wetlands']

// simple pre-headingsNester
function preHeadingsNester(headingsRaw) {
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
    console.log(h1Array)
    console.log(h2Array)
    console.log(h3Array)
}
preHeadingsNester(headingsRaw)

// headingsNester (incomplete)
function headingsNester(headingsRaw) {
    let result = []
    let h1Current = false
    let h2Current = false
    let h3Current = false
    for (heading of headingsRaw) {
        if (heading.charAt(1) == 1) {
            result.push(heading)
            h1Current = true
            // console.log(h1Array)
        }
        if (heading.charAt(1) == 2) {
            if (!h2Current) {
                let tempArray = []
                tempArray.push(heading)
                result.push(tempArray)
                h3Current = false
                h2Current = true
            } else {
                result.push(heading)
            }
        }
        if (heading.charAt(1) == 3) {
            if (!h3Current) {
                let tempArray = []
                tempArray.push(heading)
                result.push(tempArray)
                h2Current = false
                h3Current = true
            } else {
                result.push(heading)
                h3Current = true
            }
        }
    }
    console.log(...result)
}
headingsNester(headingsRaw)