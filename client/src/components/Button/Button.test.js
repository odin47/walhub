import {render, screen, cleanup} from '@testing-library/react'
import Button from './Button'

afterEach(() => {
    cleanup()
})

describe('Button test suit', () => {
    test('should render Button component', () => {
        render(<Button />)
        const buttonElement = screen.getByTestId("button-test")
        expect(buttonElement).toBeInTheDocument()
    })

    test('should render Button component with content', () => {
        const content = 'test'
        render(<Button>{content}</Button>)
        const buttonElement = screen.getByTestId("button-test")
        expect(buttonElement).toHaveTextContent('test')
    })
})