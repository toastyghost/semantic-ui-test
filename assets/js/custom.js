$(function() {
    $('.tabular.menu .item').tab();

    $('#menu').popup({
        inline: true,
        position: 'top left',
        delay: {
            show: 300,
            hide: 800
        }
    });

    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });



    // Dashboard charts

    let chart_1 = c3.generate({
            bindto: '#chart-1',

            size: {
                width: 320,
                height: 240
            },

            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        }),

        chart_2 = c3.generate({
            bindto: '#chart-2',

            size: {
                width: 320,
                height: 240
            },

            data: {
                columns: [
                    ['data1', 20, 25, 180, 250, 40, 350, 80],
                    ['data2', 15, 45, 500, 62, 83, 91, 5]
                ]
            }
        });

    $('.ui.search').search({
        apiSettings: {
            url: 'https://api.github.com/search/repositories?q={query}'
        },

        fields: {
            results: 'items',
            title: 'name',
            url: ''
        },

        minCharacters: 3
    });

    $('#filter-button').on('click', (e) => {
        e.preventDefault();
        $('#filter-modal').modal('show');
    });

    $('#add-job-button').on('click', (e) => {
        e.preventDefault();
        $('#job-modal').modal('show');
    });



    // Timesheet/Expense

    let $compensation_tables = $('#timesheet-table, #expense-table');

    $compensation_tables.on('click', '.edit-button', () => {
        $('#' + $(this).closest('table').prop('id').replace('table', 'modal')).modal('show');
    });

    $compensation_tables.on('click', '.delete-button', () => {
        $('#delete-row-modal').modal('show');
    });

    $('#timesheet-add-row').on('click', () => {
        $('#time-modal').modal('show');
    });

    $('#expense-add-row').on('click', () => {
        $('#expense-modal').modal('show');
    });

    $('#attachment-table').on('click', '.delete-button', () => {
        $('#delete-attachment-modal').modal('show');
    });

    $('#show-upload-dialog').on('click', () => {
        $('#upload-modal').modal('show');
    });

    $('#timesheet-attach-button').on('click', () => {
        $('#attach-modal').modal('show');
    });

    $('#timesheet-save-button').on('click', () => {
        $('#save-confirm-modal').modal('show');
    });

    $('#timesheet-submit-button').on('click', () => {
        $('#submit-confirm-modal').modal('show');
    });

    $('#travel-add-row').on('click', () => {
        $('#travel-modal').modal('show');
    });



    // Certifications

    $('tr.status').on('click', (e) => {
        e.preventDefault();

        $('#cert-modal')
            .modal('setting', 'transition', 'scale')
            .modal('show');
    });

    $('#change-password').on('click', (e) => {
        e.preventDefault();

        $('#password-modal')
            .modal('setting', 'transition', 'scale')
            .modal('show');
    });

    $('select.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();

    if (typeof $.fn.tablesort != 'undefined') {
        $('table.sortable').tablesort();
    }

    $('#prev-button').on('click', function() {
        goto_step(step_number-1);
    });

    $('#next-button').on('click', function() {
        goto_step(step_number+1);
    });
});





var url = window.location.pathname,
    filename = url.substring(url.lastIndexOf('/')+1),
    step_number = parseInt(filename.replace('req-wizard-', '').replace('.html'));

function goto_step(new_step_number) {
    window.location = window.location.href.replace(step_number, new_step_number);
}