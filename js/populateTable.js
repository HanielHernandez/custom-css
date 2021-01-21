
    
    /**
     * Populates a table base on its id
     * @param {string} tableID id of table
     * @param {{text,value,class, colClass}} columns columns of the table 
     * @param {any} values values of the table
     */
    function populate(tableID, columns, values){
        const table = document.getElementById(tableID);
        if(!table){
            console.log('TABLE NOT FOUND');
            return false;
        }

        const tablehead = document.createElement('thead');
        const tableBody =  document.createElement('tbody')
        const tableHeadCols = columns.map(col=>{
            const column =  document.createElement('th');
            column.append(col.text);
            if(col.class){
                column.classList.add(col.class);
            }
            return column
        });

        const tRows = values.map(val=>{
            const row =  document.createElement('tr')
            const rowcols  = columns.map(column=>{
                const col =  document.createElement('td');
                if(column.colClass){
                    col.classList.add(column.colClass)
                }
                col.innerHTML = val[column.value];
                return col;
            })
            row.append(...rowcols)
            return row;
        })

        // add columns to headers
        const tHeadRow = document.createElement('tr');
        tHeadRow.append(...tableHeadCols)
        tablehead.append(tHeadRow)
        tableBody.append(...tRows)
        table.append(tablehead);
        table.append(tableBody);

    }
export default populate;