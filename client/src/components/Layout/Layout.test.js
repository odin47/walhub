import {BrowserRouter as Router} from 'react-router-dom'
import {render, screen, cleanup} from '@testing-library/react'
import Layout from './Layout'

afterEach(() => {
    cleanup()
})

describe('Layout test suit', () => {
    test('should render Layout component', () => {
        render(<Router><Layout /></Router>)
        const LayoutElement = screen.getByTestId("layout-test")
        expect(LayoutElement).toBeInTheDocument()
    })

    test('should render Layout component with content', () => {
        const listData = {
            data: [
                {
                    id: 1234,
                    name: 'react'
                },
                {
                    id: 3456,
                    name: 'moment'
                },
                {
                    id: 9876,
                    name: 'testing'
                }
            ]
        }
        render(<Router><Layout searchList={listData}/></Router>)
        const LayoutElement = screen.getByTestId("layout-test")
        expect(LayoutElement).toHaveTextContent('testing')
    })
})