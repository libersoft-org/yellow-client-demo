<script>
    import {onMount} from 'svelte';
    import axios from 'axios';
    import Chart from 'chart.js/auto';

    let canvas;
    let chart;

    let date_text; 
    let price_text;

    async function fetchData(interval){
        let url = '';
        switch (interval) {
            case 'day':
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';
                break;
            case 'week':
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7';
                break;
            case 'month':
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30';
                break;
            case 'year':
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365';
                break;
            case 'all':
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max';
                break;
            default:
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';
        }
        const response = await axios.get(url);
        return response.data;
    }


    async function updateChart(interval){
        let ctx = canvas?.getContext('2d');
        if (!ctx) return;
        const data = await fetchData(interval);
        const labels = data.prices.map(price => {
            const date = new Date(price[0]);
            if (interval === 'day') return `${date.getHours()}:00`;
            else return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        });
        const prices = data.prices.map(price => price[1]);
        const currentDate = new Date(data.prices[data.prices.length - 1][0]);
        const currentPrice = data.prices[data.prices.length - 1][1];
        date_text  = `Date: ${currentDate.toDateString()} ${interval === 'day' ? currentDate.getHours() + ':00' : ''}`;
        price_text = `Price: $${currentPrice.toFixed(2)}`;
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Bitcoin price',
                    data: prices,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                    pointRadius: 2,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Price in USD'
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length) {
                        const index = elements[0].index;
                        const date = labels[index];
                        const price = prices[index];
                        date_text  = 'Date: '+date;
                        price_text = 'Price: $'+price.toFixed(2);
                    }
                }
            }
        });
    }


    onMount(() => {
        updateChart('day');
    });


</script>


<div class="container">
  <h1>Bitcoin price</h1>
  <div id="current-info">
    <p id="current-date">{{ date_text }}</p>
    <p id="current-price">{{ price_text }}</p>
  </div>
  <canvas id="bitcoinChart" bind:this={canvas}/>
  <div class="buttons">
    <button on:click="{updateChart('day')}">Day</button>
    <button on:click="{updateChart('week')}">Week</button>
    <button on:click="{updateChart('month')}">Month</button>
    <button on:click="{updateChart('year')}">Year</button>
    <button on:click="{updateChart('all')}">All Time</button>
  </div>
</div>
