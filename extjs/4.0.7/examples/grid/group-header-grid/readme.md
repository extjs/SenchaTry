# Grouped Header Grid Example #

This example shows how to create a grid with column headers which are nested within category headers.

Category headers do not reference Model fields via a `dataIndex`, rather they contain child header definitions (which may themselves either contain a `dataIndex` or more levels of headers).

The syntax is as simple as:

    {
        header: 'Category Header',
        headers: [{
            header: 'First Sub Header',
            dataIndex: 'subHeaderField1'
        }, {
            header: 'Second Sub Header',
            dataIndex: 'subHeaderField2'
        }]
    }
