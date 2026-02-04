document.getElementById('download-pdf').addEventListener('click', function () {
    const element = document.getElementById('bill-container');

    // Add professional print styles temporarily
    element.classList.add('print-mode');
    document.body.classList.add('print-mode');

    const opt = {
        margin: [10, 10],
        filename: 'Nota-Toko-Puspa-' + new Date().getTime() + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        // Remove styles after generation
        element.classList.remove('print-mode');
        document.body.classList.remove('print-mode');
        showNotification("Bill saved as PDF!");
    });
});
