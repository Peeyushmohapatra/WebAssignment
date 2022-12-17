const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

let selectedButton = 'start' //anywhere
let sortOrder = 'asc' //dsc
const startWordButton = document.getElementById('start_word_button')
const anywhereButton = document.getElementById('anywhere_button')
const sortButton = document.getElementById('sort_button')
const sortButtonIcon = document.getElementById('sort_button_icon')
const searchInput = document.getElementById('search_input')
const countriesCardsContainer = document.getElementById('country_cards_container')
const numberOfCountries = document.getElementById('number_of_countires')
const searchText = document.getElementById('search_text')
const filteredNumberOfCountries = document.getElementById('filtered_number_of_countries')

init()

function init() {
    numberOfCountries.innerText = countries.length
    startWordButton.addEventListener('click', function () {
        selectedButton = 'start'
        startWordButton.setAttribute('class', 'select')
        anywhereButton.removeAttribute('class')
        renderCountries()
    })
    anywhereButton.addEventListener('click', function () {
        selectedButton = 'anywhere'
        anywhereButton.setAttribute('class', 'select')
        startWordButton.removeAttribute('class')
        renderCountries()
    })
    sortButton.addEventListener('click', changeSortOrder)
    searchInput.addEventListener('keyup', renderCountries)
    renderCountries()
}

function changeSortOrder() {
    sortOrder = sortOrder === 'asc' ? 'dsc' : 'asc'
    if (sortOrder === 'asc') {
        sortButtonIcon.setAttribute('class', 'fa-solid fa-arrow-down-a-z')
    } else {
        sortButtonIcon.setAttribute('class', 'fa-solid fa-arrow-up-a-z')
    }
    renderCountries()
}

function renderCountries() {
    // filter data as per the button selected and text typed inside search input
    const inputValue = searchInput.value
    searchText.innerText = "'" + inputValue + "'"
    let countriesCopy = [...countries]
    if (selectedButton === 'start') {
        countriesCopy = countriesCopy.filter((country) => {
            return country.toLowerCase().startsWith(inputValue.toLowerCase())
        })
    } else {
        countriesCopy = countriesCopy.filter((country) => {
            return country.toLowerCase().includes(inputValue.toLowerCase())
        })
    }
    filteredNumberOfCountries.innerText = countriesCopy.length
    let html = ''
    if (sortOrder === 'asc') {
        for (let i = 0; i < countriesCopy.length; i++) {
            html += `<div class="country_card">
            <h3 class="country_name">${countriesCopy[i]}</h3>
        </div>`
        }
    } else {
        for (let i = countriesCopy.length - 1; i >= 0; i--) {
            html += `<div class="country_card">
            <h3 class="country_name">${countriesCopy[i]}</h3>
        </div>`
        }
    }
    countriesCardsContainer.innerHTML = html
}