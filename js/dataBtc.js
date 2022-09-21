window.onload = () => {

    const cointTicker = "BTC";
    const baseApi = `https://www.mercadobitcoin.net/api/${cointTicker}`;

    const mayerMultipleBaseDays = 200;
    let sumTwoHundredDays = 0;

    let todaysQuotation = "";
    let averageTwoHundred = "";
    let mayerMultiple = "";

    async function getTodaysQuotation() {

        try {
            
            const query = await fetch(`${baseApi}/ticker`);
            const queryResult = await query.json();

            const todaysQuotationTmp = await queryResult.ticker.last;
            //todaysQuotation = await Number(todaysQuotationTmp).toFixed(2); - Limitar a duas casas decimais
            todaysQuotation = todaysQuotationTmp;

            //Adicionando ao documento
            document.getElementById('ActualPrice').innerHTML = `${Number(todaysQuotation).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

        } catch (err) {
            console.error('There\'s an error on getTodaysQuotation function: ' + err);
        }
    }

    async function cardsQuotations() {

        const dateForCards = new Date();

        dateForCards.setDate(dateForCards.getDate() -30);
        var htmlTwoYearsPrice = await getCardsQuotation(dateForCards.getFullYear(), dateForCards.getMonth() + 1, dateForCards.getDate());
        document.getElementById('OneMonthPrice').innerHTML = `${Number(htmlTwoYearsPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;


        dateForCards.setDate(dateForCards.getDate() -335);
        var htmlTwoYearsPrice = await getCardsQuotation(dateForCards.getFullYear(), dateForCards.getMonth() + 1, dateForCards.getDate());
        document.getElementById('OneYearPrice').innerHTML = `${Number(htmlTwoYearsPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

        
        dateForCards.setDate(dateForCards.getDate() -365);
        var htmlTwoYearsPrice = await getCardsQuotation(dateForCards.getFullYear(), dateForCards.getMonth() + 1, dateForCards.getDate());
        document.getElementById('TwoYearsPrice').innerHTML = `${Number(htmlTwoYearsPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

    }

    async function getCardsQuotation(year, month, day) {

        try {
            
            const query = await fetch(`${baseApi}/day-summary/${year}/${month}/${day}`);
            const queryResult = await query.json();

            const closingQuotation = queryResult.avg_price

            return closingQuotation;

        } catch (err) {
            console.error('There\'s an error on getClosingQuotation function: ' + err);
        }
    }

    function calculateTwoHundred() {

        let date = new Date();

        for (let x = 0; x < 200; x++){

            date.setDate(date.getDate() -1);
            
            const year = String(date.getFullYear()).padStart(2, '0');
            const month = String(date.getMonth() +1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');

            getClosingQuotation(year, month, day);
        }
    }

    async function getClosingQuotation(year, month, day) {

        try {
            
            const query = await fetch(`${baseApi}/day-summary/${year}/${month}/${day}`);
            const queryResult = await query.json();

            const closingQuotation = queryResult.avg_price

            sumTwoHundredDays += closingQuotation;

        } catch (err) {
            console.error('There\'s an error on getClosingQuotation function: ' + err);
        }
    }

    
    function getAverageTwoHundred() {
        averageTwoHundred = (sumTwoHundredDays/mayerMultipleBaseDays);
        document.getElementById('AverageTwoHundred').innerHTML = `${Number(averageTwoHundred).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
    }

    
    function getMayerMultiple() {
        
        const markdown = document.getElementById('markdown'); 
        const trace = document.getElementById('trace');

        const today = todaysQuotation;
        const average = averageTwoHundred;
        
        mayerMultiple = (today/average).toFixed(2);
        document.getElementById('MayerMultiple').innerHTML = mayerMultiple;

        if (mayerMultiple <= 1) {
            markdown.classList.add("green");
            trace.classList.add("green");
        } else if (mayerMultiple <= 2.40) {
            markdown.classList.add("yellow");
            trace.classList.add("yellow");
        } else {
            markdown.classList.add("red");
            trace.classList.add("red");
        }
    }

    function dateNow() {
        const lastRefresh = document.getElementById('lastRefresh');
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() +1).padStart(2, '0');
        const year = String(date.getFullYear()).padStart(2, '0');
        const hour = date.getHours();
        const minute = String(date.getMinutes()).padStart(2, '0');

        lastRefresh.innerHTML += `${day}/${month}/${year} ${hour}:${minute}`;
    }
    

    


    function main() {

        getTodaysQuotation();

        cardsQuotations();

        calculateTwoHundred();

        setTimeout(() => {
            getAverageTwoHundred();
        }, 1500);

        setTimeout(() => {
            getMayerMultiple();
        }, 1500);

        dateNow();

        // setTimeout(() => {
        //     showResults();
        // }, 1010);

    }

    main();

};


// - Multiplo de Mayer 
// - Preço atual
// - Média 200 dias
// - Preço há 2 anos
// - Preço há 1 ano
// - Preço mês passado
// - 
// - 