// Function to generate date labels for the last N days
function getLastNDaysLabels(days) {
    const labels = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        // Using a simple date string format; can be adjusted
        labels.push(date.toLocaleDateString('en-CA')); // YYYY-MM-DD format for better sorting
    }
    return labels;
}

// Function to generate random latency data
function generateRandomLatencyData(days) {
    return Array.from({ length: days }, () => Math.random() * 80 + 20); // Latency between 20ms and 100ms
}

const MOCK_DAYS = 30;
const dateLabels = getLastNDaysLabels(MOCK_DAYS);

// Time series data for vendors
const timeSeriesVendorData = {
    labels: dateLabels,
    datasets: [
        {
            label: 'Vendor Alpha',
            data: generateRandomLatencyData(MOCK_DAYS),
            borderColor: 'rgba(255, 159, 64, 1)', // Orange
            backgroundColor: 'rgba(255, 159, 64, 0.2)', // Lighter orange for area fill
            tension: 0.1,
            fill: true
        },
        {
            label: 'Vendor Beta',
            data: generateRandomLatencyData(MOCK_DAYS),
            borderColor: 'rgba(75, 192, 192, 1)', // Teal
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: true
        },
        {
            label: 'Vendor Gamma',
            data: generateRandomLatencyData(MOCK_DAYS),
            borderColor: 'rgba(153, 102, 255, 1)', // Purple
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.1,
            fill: true
        },
        {
            label: 'Vendor Delta',
            data: generateRandomLatencyData(MOCK_DAYS),
            borderColor: 'rgba(255, 205, 86, 1)', // Yellow
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            tension: 0.1,
            fill: true
        }
    ]
};

// Chart configuration
const config = {
    type: 'line', // Changed to line chart
    data: timeSeriesVendorData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Latency (ms)',
                    color: '#ffffff'
                },
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: '#ffffff'
                },
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff'
                }
            },
            title: {
                display: true,
                text: 'Vendor Latency (Last 30 Days)', // Updated title
                color: '#ff9900', // Orange title text
                font: {
                    size: 18
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#2f3136', // Dark tooltip
                titleColor: '#ff9900', // Orange title in tooltip
                bodyColor: '#ffffff', // White body text in tooltip
                borderColor: '#ff9900',
                borderWidth: 1
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    }
};

// Render the chart
window.onload = () => {
    const ctx = document.getElementById('latencyChart').getContext('2d');
    new Chart(ctx, config);
};
