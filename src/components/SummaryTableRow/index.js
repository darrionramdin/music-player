import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SummaryTableRow = ({title, data}) => {
    return (
        <tr className={css(styles.tableRow)}>
            <td className={css(styles.tableData)}>{title}</td>
            <td className={css([styles.tableData, styles.light])}>{data}</td>
        </tr>
    )
}

const styles = StyleSheet.create({
    tableRow: {
        padding: '12px 0',
    },

    tableData: {
        padding: '0px 15px',
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        opacity: 0.2
    },

    light: {
        opacity: 1
    }
})
 
export default SummaryTableRow;