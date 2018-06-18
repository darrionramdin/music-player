import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SummaryTableRow from '../SummaryTableRow';

const SummaryTable = ({data}) => {
    let tableRows;

    if(data) {
        tableRows = data.map( (entry, index) => <SummaryTableRow key={index} title={entry.title} data={entry.data} /> )
    } else {
        tableRows = <div>Loading...</div>
    }

    return (
        <table className={css(styles.table)}>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

const styles = StyleSheet.create({
    table: {
        margin: '18px 0',
        width: '100%',
    },
})
 
export default SummaryTable;