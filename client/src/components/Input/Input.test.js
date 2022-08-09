import {BrowserRouter as Router} from 'react-router-dom'
import {render, screen, cleanup} from '@testing-library/react'
import Input from './Input'

afterEach(() => {
    cleanup()
})

describe('Input test suit', () => {
    test('should render Input component', () => {
        render(<Input />)
        const InputElement = screen.getByTestId("input-test")
        expect(InputElement).toBeInTheDocument()
    })

    test('should render Input component with content', () => {
        const listData = [
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
        render(<Router><Input listData={listData}/></Router>)
        const InputElement = screen.getByTestId("input-test")
        expect(InputElement).toHaveTextContent('testing')
    })
})