const chart = document.querySelector('#chart').getContext('2d');

// Create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'BTC',
                data: [29347, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004, 50101],
                borderColor:'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32689, 5000, 3000, 18656, 24832, 36844, 40402],
                borderColor:'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})


//show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})

//change theme - light/dark
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

