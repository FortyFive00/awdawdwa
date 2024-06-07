
const plotsData = [
    {
        //generali
            title: "Età",
            labels: ["14-18", "18-30", "30-45", "45-60", "Over 60"],
            values: [75.5, 11.4, 3.1, 3.0, 7.0],
            description: "In questo grafico sono rappresentate le percentuali delle fasce d’età che hanno risposto al questionario. I risultati ci dicono che il 75,5% delle persone che hanno votato sono ragazzi dai 14 ai 18 anni. L’11,4% delle risposte sono state date da giovani dai 18 ai 30 anni. Il restate delle risposte sono persone over 30.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
        },
        {
            title: "Sesso",
            labels: ["Maschio", "Femmina"],
            values: [37.8, 62.2],
            description: "La maggioranza delle risposte sono state date per 62,2% da femmine mentre il 37,8% da maschi.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e"]
        },
        {
            title: "Luogo di residenza",
            labels: ["Lecco centro", "Lecco periferia", "Altro"],
            values: [31.7, 61.4, 6.9],
            description: "Il 61,4% delle persone che hanno votato a questo sondaggio sono persone che vivono in provincia di Lecco, il 31,7% vive nella periferia di Lecco e la restate parte vive nella Lecco centro.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c"]
        },
        
        // Trasporto pubblico locale
        {
            title: "Cosa non funziona nel trasporto pubblico di Lecco?",
            labels: ["Orari dei bus", "Percorso delle linee", "Il fatto che i bus sono vecchi", "L'eccessivo costo dei biglietti", "Numero esiguo di controllori"],
            values: [469, 198, 180, 351, 84],
            description: "In questo grafico vengono rappresentate le risposte riguardo a cosa non funziona nel trasporto pubblico di Lecco. La maggior parte delle persone pensa che sono gli orari dei bus a non essere funzionanti per una mobilità fattibile.",
            type: "bar",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
        },
        {
            title: "Cosa miglioreresti del trasporto pubblico di Lecco?",
            labels: ["Riduzione dei tempi di attesa", "Quantità di bus", "Percorso delle linee", "Flotta di autobus più moderna", "Maggior numero di controllori", "Biglietti meno cari"],
            values: [394, 325, 159, 140, 62, 365],
            description: "Dalla rappresentazione grafica possiamo notare che il maggior numero delle persone vorrebbe la riduzione dei tempi di attesa. Al secondo posto, con 365 voti, abbiamo la richiesta di biglietti meno cari.",
            type: "bar",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"]
        },
        {
            title: "Se l'orario del bus fosse cadenzato, lo prenderesti di più?",
            labels: ["Sì", "No", "Indifferente"],
            values: [54.4, 38.1, 7.5],
            description: "Questo ci dice che se i pullman dovessero avere un’orario cadenzato sicuramente la maggior parte delle persone lo prenderebbe con più frequenza evitando l’uso della macchina. Nonostante molti però dicono che è indifferente perché preferiscono utilizzare l’auto.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c"]
        },
        {
            title: "Perché non prendi il pullman?",
            labels: ["Non mi è comodo", "Non mi piace", "Impiego più tempo con il bus che con altri mezzi", "È troppo caro", "Fa giri troppo lunghi", "I tempi di attesa sono troppo lunghi", "È troppo pieno, soprattutto nell’ora di punta"],
            values: [220, 98, 166, 156, 166, 245, 344],
            description: "In questa rappresentazione grafica è stata posta la domanda del perché molti non prendono il pullman. Le risposte più votate sono state: perché i pullman sono troppo pieni e perché non è visto come un mezzo pubblico comodo.",
            type: "bar",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2"]
        },
        {
            title: "Ritieni che i mezzi pubblici siano sicuri?",
            labels: ["Sì", "No"],
            values: [53.9, 46.1],
            description: "Alla domanda: ritieni che i mezzi pubblici siano sicuri? Il 53,9% ha risposto di sì, mentre il 46,1% ha risposto di no.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e"]
        },
        // Mobilità dolce
        {
            title: "Quale sarebbe, per te, il prezzo ideale per una cosa nella città di Lecco?",
            labels: ["1 €","1.50 €","Non lo so","50 centesimi"],
            values: [38.1,12.7,20.9,28.3],
            description: "Le preferenze dei rispondenti sul prezzo ideale mostrano una netta prevalenza per il costo di circa 1€, con il 38,1%. Seguono coloro che preferirebbero un prezzo di appena 50 centesimi con il 28,3%, mentre il 20,9% e il 12,7% dei rispondenti rispettivamente non hanno idea di un prezzo adeguato oppure vorrebbero che costasse 1.50 €",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]
        },
        {
            title: "Quale mezzo di trasporto preferisci?",
            labels: ["Macchina", "Motorino", "Bici", "Pullman", "A piedi"],
            values: [71.1, 1.1, 10.6, 4.4, 12.8],
            description: "Qui possiamo notare come la maggior parte delle persone preferisca spostarsi in macchina. La seconda scelta ricade sull’andare a piedi mentre la terza sulla bicicletta. Il pullman quindi non rientra nemmeno nella classifica dei tre mezzi più utilizzati.",
            type: "bar",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
        },


        {
            title: "Uso dei mezzi pubblici",
            labels: ["Quasi mai", "Da 1 a 3", "Da 4 a 6", "Tutti i giorni"],
            values: [33, 30.2, 29.4, 7.4],
            description: "Il 33% ha risposto quasi mai, il 29,4% ha risposto tutti i giorni, il 30,2% ha risposto da 4 a 6 volte alla settimana mentre la restante parte ha risposto dai 1 a 3 volte alla settimana.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]
        },
        // Accessibilità
        {
            title: "Il servizio di trasporto pubblico è accessibile a tutti?",
            labels: ["Sì", "No"],
            values: [60, 40],
            description: "Alla domanda se il servizio di trasporto pubblico è accessibile a tutti, il 60% ha risposto di sì, mentre il 40% ha risposto di no.",
            type: "pie",
            colors: ["#1f77b4", "#ff7f0e"]
        },
        {
            title: "Quali miglioramenti apporterebbe all'accessibilità del trasporto pubblico?",
            labels: ["Più rampe e ascensori", "Mezzi più accessibili", "Segnaletica migliore", "Più informazioni sul servizio", "Altro"],
            values: [150, 180, 120, 90, 60],
            description: "Le risposte mostrano che la maggior parte delle persone vorrebbe mezzi più accessibili e più rampe e ascensori per migliorare l'accessibilità del trasporto pubblico.",
            type: "bar",
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
        }
    ];

    const plotSection = document.getElementById('plotSection');

    plotsData.forEach((plotData, index) => {
        const plotContainer = document.createElement('div');
        plotContainer.className = 'plot-container';

        const plotDiv = document.createElement('div');
        plotDiv.className = 'plot';
        plotDiv.id = `myPlot${index}`;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        descriptionDiv.innerHTML = `<p>${plotData.description}</p>`;

        if (index % 2 === 0) {
            plotContainer.appendChild(plotDiv);
            plotContainer.appendChild(descriptionDiv);
        } else {
            plotContainer.appendChild(descriptionDiv);
            plotContainer.appendChild(plotDiv);
        }

        plotSection.appendChild(plotContainer);

        let data;
        if (plotData.type === 'bar') {
            data = [{
                y: plotData.labels,
                x: plotData.values,
                type: plotData.type,
                orientation: 'h',
                marker: {
                    color: plotData.colors
                },
                text: plotData.values.map(String),
                textposition: 'auto'
            }];
        } else {
            data = [{
                labels: plotData.labels,
                values: plotData.values,
                type: plotData.type,
                marker: {
                    colors: plotData.colors
                }
            }];
        }

        const layout = {
            title: plotData.title,
            autosize: true,
            paper_bgcolor: '#E8DFCA',
            plot_bgcolor: '#E8DFCA',
            xaxis: { title: "Percentuale" },
            yaxis: { automargin: true }
        };

        Plotly.newPlot(plotDiv.id, data, layout);
    });