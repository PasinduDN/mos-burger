const load = (page) => {
    const dashboardPage = document.getElementById('section-dashboard');
    const salesDashboard = document.getElementById('section-sales')
    const storePage = document.getElementById('section-store');
    const customerPage = document.getElementById('section-customers');


    // Hide all pages by default
    dashboardPage.style.display = 'none';
    salesDashboard.style.display = 'none';
    storePage.style.display = 'none';
    customerPage.style.display = 'none';

    // Show the selected page
    if (page === 'dashboard') {
        dashboardPage.style.display = 'block';
    } else if (page === 'sales') {
        salesDashboard.style.display = 'block';
    } else if (page === 'store') {
        storePage.style.display = 'block';
    } else if (page === 'customer') {
        customerPage.style.display = 'block';
    } else {
        console.error('Invalid page name:', page);
    }

}
load('dashboard')
