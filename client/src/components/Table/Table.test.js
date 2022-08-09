import {render, screen, cleanup} from '@testing-library/react'
import Table from './Table'

afterEach(() => {
    cleanup()
})

describe('Table test suit', () => {
    test('should render Table component', () => {
        render(<Table />)
        const TableElement = screen.getByTestId("table-test")
        expect(TableElement).toBeInTheDocument()
    })

    test('should render Table component with content', () => {
        const content =  [
            {
              name: 'name',
              value: 'flask'
            },
            {
              name: 'full_name',
              value: 'pallets/flask'
            },
            {
              name: 'description',
              value: 'The Python micro framework for building web applications.'
            }
          ]
        render(<Table data={content}/>)
        const TableElement = screen.getByTestId("table-test")
        expect(TableElement).toHaveTextContent('pallets/flask')
    })
})