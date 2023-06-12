const country = [
    {
        "name": "india",
        "code": 91
    },
    {
        "name": "america",
        "code": 93
    },
    {
        "name": "japan",
        "code": 94
    },
    {
        "name": "bahamas",
        "code": 95
    },
]

const states = [
    {
        "name": "gujarat",
        "cCode": 91,
        "sCode": 01
    },
    {
        "name": "maharashtra",
        "cCode": 91,
        "sCode": 02
    },
    {
        "name": "karnataka",
        "cCode": 91,
        "sCode": 03
    },

    {
        "name": "baham",
        "cCode": 95,
        "sCode": 01
    },
    {
        "name": "kapi",
        "cCode": 95,
        "sCode": 02
    },
    {
        "name": "calefornia",
        "cCode": 93,
        "sCode": 01
    },
    {
        "name": "mexico",
        "cCode": 93,
        "sCode": 02
    },
    {
        "name": "tokino",
        "cCode": 94,
        "sCode": 01
    },
    {
        "name": "hanako",
        "cCode": 94,
        "sCode": 02
    },


]


const cities = [
    {
        "name": "Surat",
        "cCode": 91,
        "sCode": 01
    },
    {
        "name": "ahemdabad",
        "cCode": 91,
        "sCode": 01
    },
    {
        "name": "vadodara",
        "cCode": 91,
        "sCode": 01
    },
    {
        "name": "mumbai",
        "cCode": 91,
        "sCode": 02
    },
    {
        "name": "nashik",
        "cCode": 91,
        "sCode": 02
    },
    {
        "name": "sambhaji Nagar",
        "cCode": 91,
        "sCode": 02
    },
    {
        "name": "bangluru",
        "cCode": 91,
        "sCode": 03
    },
    {
        "name": "manglore",
        "cCode": 91,
        "sCode": 03
    },
    {
        "name": "rampur",
        "cCode": 95,
        "sCode": 01
    },
    {
        "name": "rajpur",
        "cCode": 95,
        "sCode": 01
    },
    {
        "name": "kish",
        "cCode": 95,
        "sCode": 02
    },
    {
        "name": "lank",
        "cCode": 95,
        "sCode": 02
    },
    {
        "name": "jersey",
        "cCode": 93,
        "sCode": 01
    },
    {
        "name": "newYork",
        "cCode": 93,
        "sCode": 01
    },
    {
        "name": "spice",
        "cCode": 93,
        "sCode": 02
    },
    {
        "name": "GP",
        "cCode": 93,
        "sCode": 02
    },
    {
        "name": "tokiyo",
        "cCode": 94,
        "sCode": 01
    },
    {
        "name": "sumiyoshi",
        "cCode": 94,
        "sCode": 01
    },
    {
        "name": "tanjiro",
        "cCode": 94,
        "sCode": 02
    },
    {
        "name": "nezuko",
        "cCode": 94,
        "sCode": 02
    },

]



var countrySel = document.getElementById("country")
var stateSel = document.getElementById("state")
var citySel = document.getElementById("city")

stateSel.disabled = true
citySel.disabled = true


stateSel.length = 1
citySel.length = 1


country.forEach(cur => {
    countrySel.options[countrySel.options.length] = new Option(cur.name, cur.name);
})

countrySel.onchange = function () {
    stateSel.disabled = true
    citySel.disabled = true

    stateSel.length = 1

    countryVal = countrySel.value
    const countryCode = country.find((cur) => cur.name === countryVal).code


    const statesOptions = states.filter((cur) => cur.cCode === countryCode)

    stateSel.disabled = statesOptions.length ? false : true



    statesOptions.forEach(cur => {
        stateSel.options[stateSel.options.length] = new Option(cur.name, cur.name);
    })

}



stateSel.onchange = function () {
    citySel.length = 1

    const stateVal = stateSel.value
    const state = states.find((cur) => cur.name === stateVal)

    const citiesOptions = cities.filter((cur) => cur.cCode === state.cCode && cur.sCode === state.sCode)


    citySel.disabled = citiesOptions.length ? false : true

    citiesOptions.forEach((cur) => {
        citySel.options[citySel.options.length] = new Option(cur.name, cur.name)
    })


}