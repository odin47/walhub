import {render, screen, cleanup} from '@testing-library/react'
import Pagination from './Pagination'
import Button from '../Button';

afterEach(() => {
    cleanup()
})

describe('Pagination test suit', () => {
    test('should render Pagination component', () => {
        render(<Pagination />)
        const PaginationElement = screen.getByTestId("pagination-test")
        expect(PaginationElement).toBeInTheDocument()
    })

    test('should render Pagination component with content', () => {
        render(<Pagination />)
        const PaginationElement = screen.getByTestId("pagination-test")
        const ButtonElement = screen.getAllByTestId("button-test")[0]
        expect(PaginationElement).toContainElement(ButtonElement)
    })
})