// Add more elements to these lists. The contents do not have to be real.
document.addEventListener('DOMContentLoaded', function() {

    const GEOGRAPHY_LIST = [
        {
            country: 'United States',
            capital: 'Washington',
            largestCity: 'New York',
            subdivisionName: 'state',
            subdivisions: [
                {
                    name: 'Louisiana',
                    capital: 'Baton Rouge',
                    largestCity: 'New Orleans',
                    area: 134264,
                },
                {
                    name: 'California',
                    capital: 'Sacramento',
                    largestCity: 'Los Angeles',
                    area: 423970,
                },
                {
                    name: 'Nevada',
                    capital: 'Carson City',
                    largestCity: 'Las Vegas',
                    area: 286382,
                },
            ],
        },
        {
            country: 'Guatemala',
            capital: 'Guatemala City',
            largestCity: 'Guatemala City',
            subdivisionName: 'department',
            subdivisions: [
                {
                    name: 'Huehuetenango',
                    capital: 'Huehuetenango',
                    largestCity: 'Huehuetenango',
                    area: 7403,
                },
                {
                    name: 'Izabal',
                    capital: 'Puerto Barrios',
                    largestCity: 'Puerto Barrios',
                    area: 9038,
                },
                {
                    name: 'El Progreso',
                    capital: 'Guastatoya',
                    largestCity: 'Guastatoya',
                    area: 1922,
                },
            ],
        },
        {
            country: 'Fantasyland',
            capital: 'Imaginaville',
            largestCity: 'Dreamopolis',
            subdivisionName: 'region',
            subdivisions: [
                {
                    name: 'North Fantasia',
                    capital: 'Auroraville',
                    largestCity: 'Auroraville',
                    area: 105000,
                },
                {
                    name: 'South Illusia',
                    capital: 'Mystic Springs',
                    largestCity: 'Mystic Springs',
                    area: 60000,
                },
                {
                    name: 'East Mythica',
                    capital: 'Fableton',
                    largestCity: 'Fableton',
                    area: 75000,
                },
            ],
        },
    ];

      const tableContainer = document.getElementById('table-container');
      const table = document.createElement('table');

      // Create table header
      const headerRow = table.insertRow();
      const headerCells = ['Country', 'Capital', 'Largest City', 'Subdivision Name', 'Subdivisions'];
      headerCells.forEach(cellText => {
        const cell = document.createElement('th');
        cell.textContent = cellText;
        headerRow.appendChild(cell);
      });

      // Create table rows for each entry in GEOGRAPHY_LIST
      GEOGRAPHY_LIST.forEach(countryData => {
        countryData.subdivisions.forEach(subdivision => {
          const row = table.insertRow();
          row.insertCell().textContent = countryData.country;
          row.insertCell().textContent = countryData.capital;
          row.insertCell().textContent = countryData.largestCity;
          row.insertCell().textContent = countryData.subdivisionName;
          row.insertCell().textContent = `
          Name: ${subdivision.name}, 
          Capital: ${subdivision.capital}, 
          Largest City: ${subdivision.largestCity}, 
          Area: ${subdivision.area} sq km`;
        });
      });

      tableContainer.appendChild(table);
    })

