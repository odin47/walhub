import {BrowserRouter as Router} from 'react-router-dom'
import {render, screen, cleanup} from '@testing-library/react'
import Header from './Header'

afterEach(() => {
    cleanup()
})

describe('Header test suit', () => {
    test('should render Header component', () => {
        render(<Router><Header /></Router>)
        const HeaderElement = screen.getByTestId("header-test")
        expect(HeaderElement).toBeInTheDocument()
    })

    test('should render Header component with content', () => {
        const searchList = {
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
        render(
            <Router>
                <Header searchList={searchList}/>
            </Router>
        )
        const HeaderElement = screen.getByTestId("header-test")
        expect(HeaderElement).toHaveTextContent('testing')
    })
})