import {render, screen, cleanup} from '@testing-library/react'
import Footer from './Footer'

afterEach(() => {
    cleanup()
})

describe('Footer test suit', () => {
    test('should render Footer component', () => {
        render(<Footer />)
        const footerElement = screen.getByTestId("footer-test")
        expect(footerElement).toBeInTheDocument()
    })
})