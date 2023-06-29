import React from 'react'
import { Table, Td, Tbody, Th, Thead, Tfoot, Tr, Caption } from '../components/Table'

const TableDemo = () => {
    return (
        <div style={{ padding: 30 }} >
            <Table css={{ width: 500, }} >
                <Caption>This is an example table, and the caption goes here...</Caption>
                <Thead>
                    <Tr>
                        <Th>This</Th>
                        <Th>is the</Th>
                        <Th>header</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>This</Td>
                        <Td>is the</Td>
                        <Td>body</Td>
                    </Tr>
                    <Tr>
                        <Td>of</Td>
                        <Td>Christ</Td>
                        <Td>obviously</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Td>My</Td>
                        <Td>foot</Td>
                        <Td>goes here</Td>
                    </Tr>
                </Tfoot>
            </Table>
        </div>
    )
}

export default TableDemo